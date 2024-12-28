"use client";
import Addtodo from "@/components/Addtodo";
import Header from "@/components/Header";
import Todolist from "@/components/Todolist";
import React, { useState } from "react";
import "./globals.css";

function page() {
  const [todos, settodos] = useState([]);

  const addtodo = (task) => {
    settodos([...todos, task]);
  };

  const deletetodo = (index) => {
    settodos(
      todos.filter((_, i) => {
        i !== index;
      })
    );
  };

  return (
    <>
      <div>
        <Header></Header>
        <Addtodo onAdd={addtodo}></Addtodo>
        <Todolist todos={todos} onDelete={deletetodo}></Todolist>
      </div>
    </>
  );
}

export default page;
