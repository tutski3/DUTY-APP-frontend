import { gql } from 'graphql-tag';
import { DocumentNode } from 'graphql';


export const GET_DUTIES: DocumentNode = gql`
  query {
    duties {
      id
      name
    }
  }
`;

export const CREATE_DUTY: DocumentNode = gql`
  mutation CreateDuty($name: String!) {
    addDuty(name: $name) {
      id
      name
    }
  }
`;

export const UPDATE_DUTY: DocumentNode = gql`
  mutation UpdateDuty($id: String!, $name: String!) {
    updateDuty(id: $id, name: $name) {
      id
      name
    }
  }
`;

export default GET_DUTIES;
