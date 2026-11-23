import React, { useState } from 'react';

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() }
];

function App() {
    const [donates, setDonates] = useState(mockDonates);
    const [amount, setAmount] = useState('');
    let totalAmount = donates.reduce((sum, donate) => sum + donate.amount, 0);

    function handleSubmit(event) {
        event.preventDefault();

        if (!event.currentTarget.checkValidity()) {
            return;
        }

        setDonates([...donates, { amount: Number(amount), date: new Date() }]);
        setAmount('');
    }

    return (
        <>
            <form className="donate-form" onSubmit={handleSubmit}>
                <h1 id="total-amount">{totalAmount}$</h1>
                <label className="donate-form__input-label">
                    Введите сумму в $
                    <input className="donate-form__donate-input" name="amount"
                        type="number" max="100" min="1" required
                        value={amount} onChange={(event) => setAmount(event.target.value)} />
                </label>
                <button className="donate-form__submit-button" type="submit">
                    Задонатить
                </button>
            </form>
            <div className="donates-container">
                <h2 className="donates-container__title">Список донатов</h2>
                <div className="donates-container__donates">
                    {donates.map((donate, index) => (
                        <div className="donate-item" key={index}>
                            {donate.date.toLocaleString('ru-RU')} - <b>{donate.amount}$</b>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
