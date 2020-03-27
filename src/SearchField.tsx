import React from 'react';
import './Main.css'

interface SearchFieldProps {
    users: Array<User>;
}

export const SearchField: React.FC<SearchFieldProps> = ({users}) => {

    const filterList = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value.toLowerCase());
        let items = users;
        items = items.filter((item) => {
            return item.name.search(event.target.value.toLowerCase()) !== -1;
        });
        
    }

    return (
        <div className="search-field">
            <form>
                <input type="text" placeholder="Search..." onChange={filterList}/>
            </form>
        </div>
    );
    
}