import { TodosListController } from "../controllers/todoslistcontroller";
import { todolistitemview } from "../views/todolistitemview";
import { updatetodoformview } from "../views/updatetodoformview";
import { ITodo } from "../interfaces/ITodo";
import { IObserver } from "../interfaces/IOBSERVE";

export class todolistrenderer implements IObserver{

constructor(
    public todoslistcontainer: HTMLElement,
    public todolistcontroller: TodosListController
) { }

    update(): void {}

    rendertodoslist(todoslist: ITodo[]){
        if(this.todoslistcontainer) {
            this.todoslistcontainer.innerHTML = '';
            const todolistitems = todoslist.map((todo) => todo.isEditing ? updatetodoformview(todo) : todolistitemview(todo));
            this.todoslistcontainer.innerHTML += todolistitems.join('')

            todoslist.forEach((todo) => {
             const checkbox = document.querySelector(`[data-checkbox="${todo.id}"]`);
             const deletebtn = document.querySelector(`[data-delete="${todo.id}"]`);
             const editbtn = document.querySelector(`[data-edit="${todo.id}"]`);
             const updateform = document.querySelector(`[data-updateForm="${todo.id}"]`) as HTMLFormElement;
             const updateinput = document.querySelector(`[data-updateInput="${todo.id}"]`) as HTMLInputElement;
             checkbox?.addEventListener('change', () => {
                this.todolistcontroller.toggleTodoDone(todo.id);
            });
             deletebtn?.addEventListener('click', () => {
                this.todolistcontroller.deleteTodo(todo.id);
            });
             editbtn?.addEventListener('click', () => {
                this.todolistcontroller.toggleTodoEditing(todo.id)
            });
            updateform?.addEventListener('submit', (e: Event) => {
                e.preventDefault();
                this.todolistcontroller.updateTodo(todo.id, updateinput.value)
            });});}}}