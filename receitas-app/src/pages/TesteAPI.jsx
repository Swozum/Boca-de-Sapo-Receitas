import React, { useEffect, useState } from 'react';

export default function TesteAPI() {
    const [users, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/user_detail/1/`);
                const data = await response.json();
                setUser(data);
                //console.log("informação no user 1 ", data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    //useEffect(() => console.log("info users: ", users), [users])

    const displayUser = (user) => {
        return (
            <div>
                {user.user_Id}
                <p>{user.username}, {user.last_Name}</p>
                <p>{user.birth_Date}</p>
                <p>{user.email}</p>
                <p>{user.password}</p>
            </div>
        )
    }

    return (
        <>
            {
                users !== null ? displayUser(users) : "Carregando"
            }
        </>
    );
}