import React from 'react';
import OrderForm from './OrderForm.jsx';

export default function App() {
    return (
        <main className="container">
            <header className="header">
                <div className="brand">СВОЁ</div>
                <span>Студия печати</span>
                <h1 id="order-title">Твоя футболка. Твои правила.</h1>
                <p>Выбери цвет, размер и свою надпись.</p>
            </header>
            <OrderForm />
        </main>
    );
}
