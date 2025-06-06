import React from 'react';
import './index.css';

const User = () => {
    return (
        <div className="user-table">
            <button type="button" class="btn btn-primary">
                <i class="fa-solid fa-user-plus"></i>
            </button>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>jonh@gmail.com</td>
                        <td>Canada</td>
                        <td className="action-buttons">
                            <button type="button" class="btn btn-info">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button type="button" class="btn btn-danger">
                                <i class="fa-solid fa-trash"></i>
                            </button>    
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default User;
