import { IObserver } from "../interfaces/IOBSERVE";
import { ITodo } from "../interfaces/ITodo"
import { localstoragecontroller } from "./localstoragecontroller";

export class TodosListController implements IObserver{
    constructor (public Localstoragecontroller: localstoragecontroller) {}
    private todos: ITodo[] = [];
    private observers: IObserver [] = [];

    get todoslist() {
        return this.todos
    }

    set todoslist(updatedtodos: ITodo[]) {
        this.todos = updatedtodos;
    }

    public addobserver(observer: IObserver) {
        this.observers.push(observer);
    }

    public notifyobservers() {
        this.observers.forEach(observer => {
            console.log('notificado');
            observer.update();
        })
    };

    update(): void {
        const todos = this.todoslist;
        this.Localstoragecontroller.settodoslist(todos)
    }

    addTodo(todo: ITodo) {
        this.todoslist.push(todo)
        this.notifyobservers();
        this.update();
    };

    deleteTodo(todoId: number) {
        const updatedtodoslist = this.todoslist.filter((todo) => todo.id != todoId)
        this.todoslist = updatedtodoslist;
        this.notifyobservers();
        this.update();
    };

    toggleTodoDone(todoId: number) {
        const updatedtodoslist = this.todos.map((todo) => todo.id == todoId ? { ...todo, isDone: !todo.isDone }: todo);
        this.todoslist = updatedtodoslist;
        this.notifyobservers();
        this.update();
    };

    toggleTodoEditing(todoId: number) {
        const updatedtodoslist = this.todoslist.map((todo) => todo.id == todoId ? {...todo, isEditing:!todo.isEditing}: todo);
        this.todoslist = updatedtodoslist;
        this.notifyobservers();
        this.update();
    }

    updateTodo(todoId: number, newDescription: string) {
        const updatedtodoslist = this.todoslist.map((todo) => todo.id == todoId? {...todo, description: newDescription, isEditing:false}: todo);
        this.todoslist = updatedtodoslist;
        this.notifyobservers();
        this.update();
    };
}