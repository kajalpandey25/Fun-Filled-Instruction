import { bindActionCreators, combineReducers, createStore } from "redux";
const  ADD_TODO = 'add_todo';
const  DELETE_TODO = 'delete_todo';
const  EDIT_TODO = 'edit_todo';
const  FINISH_TODO = 'finish_todo';

function TodoReducer(state = [], action){
    if(action.type == ADD_TODO){
      let nextId = state.length + 1;
      return [...state, {id: nextId,  text: action.payload.todoText, isFinished: false}]
    } else if(action.type == EDIT_TODO){
      const newTodoList = state.map(todo => {
          if(todo.id === action.payload.id){
            todo.text = action.payload.newTodo;
          }
          return todo;
        });
     return newTodoList;
  
    } else if(action.type == FINISH_TODO){
      const newTodoList = state.map(todo => {
          if(todo.id === action.payload.id){
            todo.isFinished = action.payload.state;
          }
          return todo;
        });
     return newTodoList;
  
    } else if(action.type == DELETE_TODO){
      const newTodoList = state.filter(todo => todo.id != action.payload.id);
      return newTodoList;
  
    }
    return state;
  }

function UserReducer(state = [], action){
  if(action.type == 'add_user'){
    let nextId = state.length +1;
    return [...state, {id: nextId, user: action.payload.user}];
  }
  return state
}

  const addTodo = (todoText) => ({type: ADD_TODO, payload: {todoText: todoText}})
  const deleteTodo = (id) => ({type: DELETE_TODO, payload: {id:id}});
  const addUser = (user) => ({type: 'add_user', payload: {user : user}});
  const reducer = combineReducers({user: UserReducer, todos: TodoReducer});

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
console.log(store);
console.log(store.getState());
const actions = bindActionCreators({addTodo, deleteTodo, addUser}, store.dispatch);
actions.addTodo('todo 2');
actions.addTodo('todo 3');
actions.deleteTodo(2);
actions.addUser('Kajal');

