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
        let field = event.target;
        let value = field.type == 'checkbox' ? field.checked : field.value;

        setValues((previousValues) => {
            return {
                ...previousValues,
                [field.name]: value
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitted(true);
    }

    if (isSubmitted) {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={() => setIsSubmitted(false)}>
                    Back
                </button>
                <table className="table">
                    <tbody>
                        {Object.keys(values).sort().map((name) => {
                            return (
                                <tr key={name}>
                                    <td>{name}</td>
                                    <td>{String(values[name])}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <form name="myForm" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Email"
                        value={values.email} onChange={handleChange} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="password" className="col-form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password"
                        value={values.password} onChange={handleChange} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="address" className="col-form-label">Address</label>
                <textarea className="form-control" name="address" id="address" placeholder="1234 Main St"
                    value={values.address} onChange={handleChange} />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="city" className="col-form-label">City</label>
                    <input type="text" className="form-control" name="city" id="city"
                        value={values.city} onChange={handleChange} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="country" className="col-form-label">Country</label>
                    <select id="country" name="country" className="form-control"
                        value={values.country} onChange={handleChange}>
                        <option value="">Choose</option>
                        <option value="argentina">Argentina</option>
                        <option value="russia">Russia</option>
                        <option value="china">China</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <label className="form-check-label" htmlFor="rules">
                        <input id="rules" type="checkbox" name="acceptRules" className="form-check-input"
                            checked={values.acceptRules} onChange={handleChange} />
                        Accept Rules
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    );
}

export default MyForm;
