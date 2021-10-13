import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const Login = () => {
    const { singInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={singInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;