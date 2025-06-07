import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'

const AddUser = () => {
    return (
        <div className="add-user">
            <Link to="/" type="button" class="btn btn-secondary">
                <i class="fa-solid fa-arrow-left"></i>
            </Link>
            <h3>ADD NEW USER</h3>
            <form className="add-user_form">
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    autocomplete="off"
                    placeholder="Enter your name"                    
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">E-mail:</label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    autocomplete="off"
                    placeholder="Enter your e-mail"                    
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address:</label>
                    <input 
                    type="text"
                    id="address"
                    name="address"
                    autocomplete="off"
                    placeholder="Enter your address"                    
                    />
                </div>
                <div className="input-group">
                    <button type="button" class="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddUser;