const initialState={
    todos:[]
}

export const todoReducer=( state =initialState ,action)=>{
    switch(action.type){
      case "FETCH_TODOS":
        state={...state}
        break;
      case "TODOS_RECIEVED":
        state={...state, todos:action.todos}
        break;
      case "ADD_TODO":
        state={...state}
        break;
      case "REMOVE_TODO":
        state={...state}
        break;
      case "UPDATE_TODO":
        state={...state}
        break;
      default:
        state={...state}  
    }
    return state;
  
  }