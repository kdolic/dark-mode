import { useState } from 'react';


// To get an item from localStorage, call localStorage.getItem(key)
// If there is no item in localStorage, it returns undefined
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key); // Get item from localStorage by key
        return item ? JSON.parse(item) : initialValue; // Parse and return stored JSON or return initialValue if undefined
    })

    const setValue = value => {
        setStoredValue(value); // Save state
        window.localStorage.setItem(key, JSON.stringify(value)); // Save to local storage

    }
    return [storedValue, setValue];
}

export default useLocalStorage;