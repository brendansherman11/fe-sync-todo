
import * as React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from "styled-components"
import './App.css';
import { AddTodo } from "./AddTodo";
import { TodoItem, type ITodoItem } from './TodoItem';
import type { Theme } from './styled';
import { useAppTodo, useUpdateTitle } from './useAppTodo';
import { TodoListContext } from './context';
import { QUERY_CLIENT } from './provider/query-client';
import { SignIn } from './SignIn/SignIn';

// import { Button, TextInput } from "./atoms";
//  import { Button } from "./atoms/Button";
//  import { TextInput } from "./atoms/TextInput";


const THEME: Theme = {
  is_dark_theme: false,

  colors: {
    primary: "#aa3bff",
    primary_light: "rgba(170, 59, 255, 0.5)",
    secondary: "#6b6375",
    border_color: "#e5e4e7"
  },

}


/**
 * Styled component ⚠️
 * 
 * Questions
 * Persisted storage 
 * __
 * Custom hook 
 * Providers  
 * __
 * API Integration and database
 */


// useEffect

// useSyncExternalStore - share link
// discuss management tool updates




/**
 * 
 * Separate business logic from UI logic
 */


export function App() {
  const v = useAppTodo();

  useUpdateTitle("John");

  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <TodoListContext value={v}>
        <ThemeProvider theme={THEME}>
          <div className="app-container">


            <div id="title">Hello World</div>
            <SignIn />
            <section id="center">
              <AddTodo />
            </section>

            <ul className="ticks">
              {v.todoList.map((todo) => {
                return (
                  <TodoItem key={todo.id} todo={todo} />
                )
              })}
            </ul>


            <div className="ticks"></div>
            <section id="spacer"></section>
          </div>
        </ThemeProvider>
      </TodoListContext>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
