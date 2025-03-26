import { ITodo } from "../interfaces/ITodo";

export function updatetodoformview(todo: ITodo) {
    return `
            <li id="${todo.id}" class="todo">
                <form class="todo__update__form" data-updateForm="${todo.id}">
                 <input class="update__form__input" data-updateInput="${todo.id}" type="text" value="${todo.description}">
                 <button class="update__form__button" type="submit">Atualizar</button>
                <form>
            </li>
            `
}