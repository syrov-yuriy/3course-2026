import React from 'react';
import OrderForm from './OrderForm.jsx'

export default function App () {
    return (
        <div className="container">
            <header className="header">
                <div className="brand">СВОЁ</div>
                <h1>Твоя футболка. Твои правила.</h1>
                <p>Выбери цвет, размер и свою надпись.</p>
            </header>
            <OrderForm />
        </div>
    )
}