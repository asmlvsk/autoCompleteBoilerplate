import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AutoComplete from './AutoComplete';

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const getUsers = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUser(getUsers.data);
    };
    getUsers();
  }, []);

  return (
    <div className="App">
      <AutoComplete array={user} />
    </div>
  );
};

export default App;
