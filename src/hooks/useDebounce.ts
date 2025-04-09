import { useState, useEffect } from 'react';


export const useDebounce =(value:string|undefined) =>{
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, 500);
      return () => {
        clearTimeout(handler);
      };
    },[value]);
    return debouncedValue;
}