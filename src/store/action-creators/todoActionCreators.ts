import moment from "moment";
import { Dispatch } from "react";
import { AppDispatch, RootState } from "..";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { ITodo } from "../../types/todoTypes";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export const addTodo = 
  (title: string, momentFrom: moment.Moment, momentDue: moment.Moment) =>
    async (dispatch: ThunkDispatch<RootState, void, AnyAction>, getState: () => RootState) => {
      const docRef = await addDoc(collection(db, "todos"), {
        title: title,
        momentFrom: momentFrom ? momentFrom.valueOf() : "",
        momentDue: momentDue ? momentDue.valueOf() : "",
      }).catch((reason)=>{
        console.log('addDoc failed: ', reason);
      })
      console.log(docRef)
      dispatch(fetchTodos())
    }

export const fetchTodos = 
  () =>
    async (dispatch: AppDispatch, getState: () => RootState) => {
      const querySnapshot = await getDocs(collection(db, "todos"))
      .catch((reason)=>{
        console.log('getDocs failed: ', reason);
      })
      console.log(querySnapshot)
      const todoList: ITodo[] = [];
      querySnapshot?.forEach(doc => {
        todoList.push({
          id: doc.id,
          title: doc.data().title,
          momentFrom: moment( isNaN(+doc.data().momentFrom) ? doc.data().momentFrom : (+doc.data().momentFrom) ), 
          momentDue: moment( isNaN(+doc.data().momentDue) ? doc.data().momentDue : (+doc.data().momentDue) ), 
        });
      });
      dispatch({ type: "SET_TODO_LIST", payload: todoList })
    }

  