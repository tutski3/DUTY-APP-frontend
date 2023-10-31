import React from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { List, Spin, Alert } from 'antd'; 
import GET_DUTIES from '../queries';

interface Duty {
  id: string;
  name: string;
}

interface DutiesQueryResult {
  duties: Duty[];
}

const DutyList: React.FC = () => {
  const { data, error, isLoading } = useQuery(
    'duties',
    () => GET_DUTIES
  ) as UseQueryResult<DutiesQueryResult, unknown>;

  if (isLoading) {
    return <Spin size="large" tip="Loading..." />;
  }

  if (error) {
    return <Alert message="Error" description="An error occurred while fetching duties." type="error" />;
  }

  return (
    <div>
      <List
        dataSource={data?.duties}
        renderItem={(duty: Duty) => (
          <List.Item key={duty.id}>
            {duty.name}
          </List.Item>
        )}
      />
    </div>
  );
};

export default DutyList;
