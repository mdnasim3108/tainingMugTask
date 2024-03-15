import { Provider } from 'react-redux';
import { store } from './store';
import React from 'react';

interface providerProps{
    children:React.ReactNode
}
export const Providers:React.FC<providerProps>=(props)=> {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}