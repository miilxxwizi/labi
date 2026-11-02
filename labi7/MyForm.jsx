import React, { useState } from 'react';

function MyForm() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        address: '',
        city: '',
        country: '',
        acceptRules: false
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setValues({
            ...values,
            [name]: type == 'checkbox' ? checked : value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitted(true);
    }

    if (isSubmitted) {
        return (
            <div>
                <button type="button" onClick={() => setIsSubmitted(false)}>Back</button>
                <table>
                    <tbody>
                        {Object.keys(values).sort().map((name) => (
                            <tr key={name}>
                                <td>{name}</td>
                                <td>{String(values[name])}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <form name="myForm" onSubmit={handleSubmit}>
            <p><label>Email <input type="email" name="email" value={values.email} onChange={handleChange} /></label></p>
            <p><label>Password <input type="password" name="password" value={values.password} onChange={handleChange} /></label></p>
            <p><label>Address <textarea name="address" value={values.address} onChange={handleChange} /></label></p>
            <p><label>City <input type="text" name="city" value={values.city} onChange={handleChange} /></label></p>
            <p>
                <label>Country
                    <select name="country" value={values.country} onChange={handleChange}>
                        <option value="">Choose</option>
                        <option value="argentina">Argentina</option>
                        <option value="russia">Russia</option>
                        <option value="china">China</option>
                    </select>
                </label>
            </p>
            <p><label><input type="checkbox" name="acceptRules" checked={values.acceptRules} onChange={handleChange} /> Accept Rules</label></p>
            <button type="submit">Sign in</button>
        </form>
    );
}

export default MyForm;
