import { useState, useEffect } from "react";

const getStoredValue= (key, defaultValue)=> {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  if(initial!== null){
    return initial
  }else{
    return defaultValue;
  }
}

const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

//This hook uses the local theme if there is one defined, or sets it to the browser's default if there is none.

const useLocalTheme = (key="darkTheme") => {
  const [value, setValue] = useState(()=>getStoredValue(key, getCurrentTheme()));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalTheme;
