import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context/Context';
import { PostDetail, PostList } from './pages';

interface Props {}

export const App: React.FC<Props> = (props) => {
    const drawHelloMessage = (componentName: string) => {
        console.log(`Hello from ${componentName}!`);
    };

    return (
        <ContextProvider>
            <BrowserRouter>
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
                        element={
                            <PostDetail drawHelloMessage={drawHelloMessage} />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
};
