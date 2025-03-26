import { ITodo } from "../interfaces/ITodo";

export function todolistitemview(todo: ITodo) {
    return `
            <li id="${todo.id}" class="todo">
                    <div class="todo__text">
                     <input type="checkbox" data-checkbox="${todo.id}">
                     <span>${todo.description}</span>
                    </div>
                    <div class="todo__actions">
                        <button class="todo__actions__edit" data-edit="${todo.id}">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round"
                          class="lucide lucide-square-pen">
                          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path
                          d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.
                          852z" />
                         </svg>
                        </button>
                        <button class="todo__actions__delete" data-delete="${todo.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            class="lucide lucide-trash-2">
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6Vc0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17">
                            </svg>
                        </button>
                    </div>
                </li>
            `
}