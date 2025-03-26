import { TodosListController } from "../controllers/todoslistcontroller";
import { todolistrenderer } from "./todolistrenderer";

export class Uncompletedtodoslistrenderer extends todolistrenderer {
    constructor(
        todoslistcontainer: HTMLElement,
        todoslistcontroller: TodosListController
    ) {
        super(todoslistcontainer, todoslistcontroller)
        this.todolistcontroller.addobserver(this);
    }
    update(): void {
        const uncompletedtodos = this.todolistcontroller.todoslist.filter(todo => !todo.isDone);
        this.rendertodoslist(uncompletedtodos)
    }
}