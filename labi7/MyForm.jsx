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

    function handleSubmit(event) {
        event.preventDefault();
        let updatedValues = {};

        for (let name in values) {
            let field = event.target.elements[name];
            updatedValues[name] = field.type == 'checkbox' ? field.checked : field.value;
        }

        setValues(updatedValues);
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
            <p><label>Email <input type="email" name="email" defaultValue={values.email} /></label></p>
            <p><label>Password <input type="password" name="password" defaultValue={values.password} /></label></p>
            <p><label>Address <textarea name="address" defaultValue={values.address} /></label></p>
            <p><label>City <input type="text" name="city" defaultValue={values.city} /></label></p>
            <p>
                <label>Country
                    <select name="country" defaultValue={values.country}>
                        <option value="">Choose</option>
                        <option value="argentina">Argentina</option>
                        <option value="russia">Russia</option>
                        <option value="china">China</option>
                    </select>
                </label>
            </p>
            <p><label><input type="checkbox" name="acceptRules" defaultChecked={values.acceptRules} /> Accept Rules</label></p>
            <button type="submit">Sign in</button>
        </form>
    );
}

export default MyForm;
