import {useState} from 'react';

const FakedLogin = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const FakedUsername = "username"
    const FakedPassword = "password"
    return (
        <div>
            {isLoggedIn == false &&
                <form action="post">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </form>
            }
        </div>
    );
};

export default FakedLogin;