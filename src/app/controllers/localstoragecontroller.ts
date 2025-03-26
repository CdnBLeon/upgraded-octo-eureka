import { ITodo } from "../interfaces/ITodo";

export class localstoragecontroller {
    constructor() {}
    gettodoslist(): ITodo[]{
        return JSON.parse(localStorage.getItem('todos')!) ?? [];
    }
    settodoslist(todos: ITodo[]){
    localStorage.setItem('todos', JSON.stringify(todos))
    }
}