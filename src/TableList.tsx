import React from 'react';
import { TableListItem } from './TableListItem';

interface TableListProps {
    users: Array<User>;

}

export const TableList: React.FC<TableListProps> = ({ users }) => {
    return (
         <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                 <th scope="col">Id</th>
                 <th scope="col">Name</th>
                 <th scope="col">Gender</th>
                 <th scope="col">Company</th>
                 <th scope="col">Email</th>
                 <th scope="col">Active</th>
                 <th scope="col">Picture</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => {
                    return (
                        <TableListItem key={user.name} user={user}/>
                    );
                })}
            </tbody>
         </table>
    );
};