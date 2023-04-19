import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

// Create a Counter Provider Component
export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(0);

    // Pass the state and functions as a value to the Context Provider
    const value = {
        userId,
        setUserId,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

// Create a custom hook to access the Counter Context
export const useUserID = () => useContext(UserContext);
