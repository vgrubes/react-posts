import React, { useCallback, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context/Context';
import { PostDetail, PostList } from './pages';

export const App: React.FC = () => {
    const drawHelloMessage = useCallback(
        (componentName: string, additionalMessage?: string) => {
            console.log(
                additionalMessage
                    ? `Hello from ${componentName} component - ${additionalMessage}!`
                    : `Hello from ${componentName} component!`
            );
        },
        []
    );

    useEffect(() => {
        drawHelloMessage('App');
    }, [drawHelloMessage]);

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
