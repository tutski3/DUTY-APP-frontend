import React from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import GET_DUTIES from '../queries';


interface Duty {
  id: string;
  name: string;
}


interface DutiesQueryResult {
  duties: Duty[];
}

const DutyList: React.FC = () => {
  const { data, error } = useQuery('duties', () => GET_DUTIES)as UseQueryResult<DutiesQueryResult, unknown>; 
  if (!data) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: ASDSADASD</div>;
  }
  

  return (
    <div>
      <ul>
        {data?.duties?.map((duty: Duty) => (
          <li key={duty.id}>{duty.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DutyList;
