import React from 'react';


// Define props as type or interface.
interface TableListItemProps {
    user: User;
}

export const TableListItem: React.FC<TableListItemProps> = ({user}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.gender}</td>
            <td>{user.company}</td>
            <td>{user.email}</td>
            <td>{user.isActive.toString().toUpperCase()}</td>
            <td><img src={user.picture} alt="User_Image" width="32" height="32"></img></td>
        </tr>
    );
}