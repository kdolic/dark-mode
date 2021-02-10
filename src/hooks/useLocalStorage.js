import {useState} from 'react';

// To get an item from localStorage, call localStorage.getItem(key)
// If there is no item in localStorage, it returns undefined
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() =>{
        const item = window.localStorage.getItem(key) // Get from local storage by key
        return item ? JSON.parse(item) : initialValue // Parse and return stored json or, if undefined, return initialValue
    })

    const setValue = value => {
        setStoredValue(value) // Save state
        window.localStorage.setItem(key, JSON.stringify(value)) // Save to local storage
    }

    return [storedValue, setValue];
}

export default useLocalStorage;