import React, { useEffect, useState } from 'react';
import './index.css';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateUser = () => {
    const users = {
        name: "",
        email: "",
        address: "",
    };

    const [user, setUser] = useState(users);
    const navigate = useNavigate();
    const {id} = useParams();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value});
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
        .then((response) => {
            setUser(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id])

    const submitForm = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/user/${id}`, user)
        .then((response) => {
            toast.success(response.data.message, {position: "top-right"})
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="add-user">
            <Link to="/" type="button" className="btn btn-secondary">
                <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <h3>UPDATE USER</h3>
            <form className="add-user_form" onSubmit={submitForm}>
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text"
                    id="name"
                    value={user.name}
                    onChange={inputHandler}
                    name="name"
                    autoComplete="off"
                    placeholder="Enter your name"                    
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">E-mail:</label>
                    <input 
                    type="email"
                    id="email"
                    value={user.email}
                    onChange={inputHandler}
                    name="email"
                    autoComplete="off"
                    placeholder="Enter your e-mail"                    
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address:</label>
                    <input 
                    type="text"
                    id="address"
                    value={user.address}
                    onChange={inputHandler}
                    name="address"
                    autoComplete="off"
                    placeholder="Enter your address"                    
                    />
                </div>
                <div className="input-group">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateUser;