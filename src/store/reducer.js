import { combineReducers } from 'redux'

let todos =[
    {text:'xuexi',completed:'true'}
]

function count(state=0,action) {
    switch(action.type){
        case "add":
            return state+1;
        case "del" :
            return state-1;
        default :
           return state;
    } 
}

function todoList(state=todos,action) {
    switch(action.type){
        case "addTodo" :
            return [
                ...state,
                {
                    text: action.text,
                    completed: 'false'
                }
            ]
        case "toggleTodo":
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                    completed: !todo.completed
                    })
                }
                return todo
                })
            })
        default:
            return state
    }
    
}


const reducer = combineReducers({
    count,
    todoList
})
  
export default reducer