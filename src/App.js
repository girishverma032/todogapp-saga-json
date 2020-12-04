import './App.css';
import { useEffect, useState } from 'react';
import {connect} from  'react-redux';

function App({todos, addTodoInList, removeTodo, fetchTodos}){
    const[todo, setTodo]=useState('');

    useEffect(() => {
        fetchTodos();
    }, [])

    const onAddTodo=()=>{
        addTodoInList({
            id: Math.floor(Math.random()*100),
            value:todo
        });
        setTodo("");

        
    }
    const deleteItem=(item)=>{
        removeTodo(item)
    }
    return(
        <div>
            <h1> Todo</h1>
            <input type="text" value={todo} onChange={(e) =>setTodo(e.target.value)}/>
            <button onClick={onAddTodo}>Add</button>
            <ul>
                {
                    todos.map((item,index)=>{
                        return(
                            <li key={index}>
                                <span onClick={()=> deleteItem(item.id)} className="delelte-icon">XX  </span>
                                <span style={{padding:'0 10px'}}>{item && item.value}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        todos:state.todos
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        addTodoInList:(value)=>{
            dispatch({
                type:'ADD_TODO',
                payload: value
            })
        },
        removeTodo: (value)=>{
            dispatch({
                type: 'REMOVE_TODO',
                payload:value
            })
        },
        fetchTodos: ()=>{
            dispatch({
                type: 'FETCH_TODOS'
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
