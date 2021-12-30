import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Post, PostList } from './pages';
import { ContextProvider } from './context/Context';

const drawHelloMessage = (componentName: string) => {
    console.log(`Hello from ${componentName}!`);
};

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
            <BrowserRouter>
                <h1>Posts</h1>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate replace to="/posts" />}
                    />
                    <Route
                        path="/posts"
                        element={
                            <PostList drawHelloMessage={drawHelloMessage} />
                        }
                    />
                    <Route
                        path="/post/:postId"
                        element={<Post drawHelloMessage={drawHelloMessage} />}
                    />
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
