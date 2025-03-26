// https://www.youtube.com/watch?v=NKM1axtauDA&t=2205s
import { TodosListController } from "./controllers/todoslistcontroller";
import { ITodo } from "./interfaces/ITodo";
import { Completedtodoslistrenderer } from "./services/completedtodoslistrender";
import { Uncompletedtodoslistrenderer } from "./services/uncompletedtodoslistrender";
import { localstoragecontroller } from "./controllers/localstoragecontroller";

const Localstoragecontroller = new  localstoragecontroller();
const controller = new TodosListController(Localstoragecontroller);

const form = document.getElementById('form') as HTMLFormElement;
const input = document.getElementById('form-input') as HTMLFormElement;
const todoslistcontainer = document.getElementById('incomplete-todos') as HTMLElement;
const uncompletedtodoslistcontainer = document.getElementById('completed-todos') as HTMLElement;

const uncompletedtodoslistrenderer = new Uncompletedtodoslistrenderer(uncompletedtodoslistcontainer, controller)
const completedtodoslistrenderer = new Completedtodoslistrenderer(uncompletedtodoslistcontainer, controller)

form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    const newTodo: ITodo = {
    id: Math.random(),
    description: input.value,
    isDone: false,
    isEditing: false
    };
    controller.addTodo(newTodo);
    uncompletedtodoslistrenderer.rendertodoslist(controller.todoslist);
    form.reset()
});

class Main {
    constructor() {}
    init () {
        const storedtodos = controller.Localstoragecontroller.gettodoslist();
        controller.todoslist = storedtodos;
        uncompletedtodoslistrenderer.update();
        completedtodoslistrenderer.update();
    }
}
const main = new Main();
main.init();