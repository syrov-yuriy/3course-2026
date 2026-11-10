import React, { useState } from 'react';

const initialForm = {
    color: '',
    size: '',
    quantity: 1,
    printing: false,
    printtext: '',
    delivery: 'pickup',
    address: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
};

export default function OrderForm() {
    const [form, setForm] = useState(initialForm);

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setForm(previousForm => ({
            ...previousForm,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form className="form" onSubmit={handleSubmit} aria-labelledby="order-title">
            <div className="fields">
                <section className="panel" aria-labelledby="shirt-title">
                    <h2 id="shirt-title">
                        <span aria-hidden="true">01</span>
                        Собери футболку
                    </h2>
                    <div className="options">
                        <div className="field">
                            <label htmlFor="color">Цвет</label>
                            <select id="color" name="color" value={form.color} onChange={handleChange} required>
                                <option value="">Не выбран</option>
                                <option>Молочный</option>
                                <option>Лавандовый</option>
                                <option>Графитовый</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="size">Размер</label>
                            <select id="size" name="size" value={form.size} onChange={handleChange} required>
                                <option value="">Не выбран</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="quantity">Количество</label>
                            <input id="quantity" name="quantity" type="number" min="1" max="10" step="1"
                                value={form.quantity} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="printing">
                            <input id="printing" name="printing" type="checkbox" checked={form.printing}
                                onChange={handleChange} />
                            Добавить надпись
                            <strong>+300&nbsp;₽</strong>
                        </label>
                    </div>

                    {form.printing && (
                        <div className="field">
                            <label htmlFor="printtext">
                                Надпись на футболке
                                <span>До 20 символов</span>
                            </label>
                            <input id="printtext" name="printtext" type="text" maxLength={20}
                                value={form.printtext} onChange={handleChange} />
                        </div>
                    )}
                </section>

                <section className="panel" aria-labelledby="delivery-title">
                    <h2 id="delivery-title">
                        <span aria-hidden="true">02</span>
                        Получение заказа
                    </h2>
                </section>

                <section className="panel" aria-labelledby="contacts-title">
                    <h2 id="contacts-title">
                        <span aria-hidden="true">03</span>
                        Контакты
                    </h2>
                </section>
            </div>

            <div className="sidebar">
                <button type="submit">Оформить заказ</button>
            </div>
        </form>
    );
}
