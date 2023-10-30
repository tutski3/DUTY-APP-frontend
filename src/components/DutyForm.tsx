import React, { useState } from 'react';
import axios from 'axios'; 

const DutyForm: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mutation = `
      mutation CreateDuty($name: String!) {
        addDuty(name: $name) {
          id
          name
        }
      }
    `;
    
    const variables = {
      name: name,
    };
    
    axios({
      url: 'http://localhost:4000',
      method: 'post',
      data: {
        query: mutation,
        variables: variables,
      },
    })
      .then((response) => {
        console.log('Mutation response:', response.data);
      })
      .catch((error) => {
        console.error('Mutation error:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add or update duty"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DutyForm;