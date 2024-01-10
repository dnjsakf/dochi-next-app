"use client";

import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PlusCircleFilled, MinusCircleFilled, RestFilled } from '@ant-design/icons';

import { useAppDispatch } from '../../(store)/hooks';
import { initializeCount, increment, decrement, selectCount } from "../../(store)/counterSlice";

const Counter = () => {

  const dispatch = useAppDispatch();
  const count = selectCount();
  // const count = useAppSelector((state) => ( state.counter.value ));

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleInitialize = () => {
    dispatch(initializeCount(0));
  }

  useEffect(()=>{
    console.log(count);
  }, [count]);

  return (
    <div className="counter-wrapper">
      <span><font color="red">{ count }</font></span>
      <Button icon={<PlusCircleFilled />} onClick={handleIncrement}/>
      <Button icon={<MinusCircleFilled />} onClick={handleDecrement}/>
      <Button icon={<RestFilled />} onClick={handleInitialize}/>
    </div>
  )
}

export default Counter;