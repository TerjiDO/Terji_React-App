import React from 'react';
import userData from './generated.json';
import { TableList } from './TableList';
import { SearchField } from './SearchField';

const users: Array<User> = userData;

function App() {
  return (
    <div className="container-fluid">
    <React.Fragment>
    <SearchField users={users}/>
    <TableList  users={users} />
    </React.Fragment>
    </div>
  );
}

export default App;
