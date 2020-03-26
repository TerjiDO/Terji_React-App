import React from 'react';
import userData from './generated.json';
import { TableList } from './TableList';

const users: Array<User> = userData;

function App() {
  return (
    <React.Fragment>
    <TableList  users={users}/>>
    </React.Fragment>
  );
}

export default App;
