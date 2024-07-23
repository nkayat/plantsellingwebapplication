import React, { useEffect, useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import handelDataFetch from '../utils/handelDataFetch';

function Logout() {
    document.title = "Logout";
    const navigate = useNavigate();

    const { setUser, setCartLength, setShowAnimation } = useContext(UserContext);

    const handleLogout = async () => {
        try {
            const result = await handelDataFetch({ path: "/api/v2/auth/logout", method: "GET" }, setShowAnimation);

            if (result.status) {
                setCartLength({ type: "CART", length: null });
                setUser({ type: "USER", user: null });
            }
        } catch (error) {
            console.error(error);
        } finally {
            navigate("/");
        }
    }

    useEffect(() => {
        handleLogout();
    })

    return (
        <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
            <h1 className='h1' style={{ fontFamily: "cursive" }}>Logout Successful!....</h1>
        </div>
    )
}

export default Logout