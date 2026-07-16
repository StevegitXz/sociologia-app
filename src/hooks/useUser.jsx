import { useState, useEffect } from 'react';

export function useUser() {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || '';
  });

  useEffect(() => {
    if (userName) {
      localStorage.setItem('userName', userName);
    }
  }, [userName]);

  const saveUserName = (name) => {
    setUserName(name);
  };

  return { userName, saveUserName };
}
