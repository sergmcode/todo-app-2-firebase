import { Button, Input, Modal, DatePicker, Spin } from "antd";
import moment from "moment";
import React, { BaseSyntheticEvent, SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "../store";
import {
  addTodo,
  fetchTodos,
} from "../store/action-creators/todoActionCreators";

interface Props {}

const AppHeader = (props: Props) => {
  const dispatch = useDispatch();
  const onClick = (e: any) => {
    setModalIsVisible(true);
  };
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [momentFrom, setMomentFrom] = useState<moment.Moment>(moment());
  const [momentDue, setMomentDue] = useState<moment.Moment>(moment());

  const modalOnOk = () => {
    setModalIsVisible(false);
    dispatch(addTodo(title, momentFrom, momentDue));
  };
  const [title, setTitle] = useState("");
  const datePickerOnChange = (e: any) => {
    setMomentFrom(e[0]);
    setMomentDue(e[1]);
  };
  const loading = useTypedSelector((state) => state.todoReducer.loading);

  return (
    <div>
      <Button onClick={onClick}>Add todo</Button>
      <Button
        onClick={() => {
          dispatch(fetchTodos());
        }}
      >
        fetchTodos
      </Button>
      <Spin spinning={loading} />
      <Modal visible={modalIsVisible} onOk={modalOnOk}>
        <Input
          value={title}
          onChange={(e: BaseSyntheticEvent) => setTitle(e.target.value)}
        />
        <DatePicker.RangePicker onChange={datePickerOnChange} showTime />
      </Modal>
    </div>
  );
};

export default AppHeader;
