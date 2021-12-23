import React,{useEffect} from "react";
import {useDispatch} from 'react-redux';
import { getTodos } from "../../redux/actions/todos";
const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTodos());
  },[])

  return <>
    <form>
      <input type='text'/>
    </form>
  </>;
};

export default TodoList;
