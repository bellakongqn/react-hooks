export function add() {
    return { 
        type: 'add'
    }
}

export function del() {
    return { 
        type: 'del'
    }
}

export function addTodo(text) {
    return { 
        type: 'addTodo',
        text,
    }
}