import React, { useEffect, useState } from 'react';

function Read() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        // Fetch entries from db.json
        const fetchEntries = async () => {
            const response = await fetch('/db.json');
            const data = await response.json();
            setEntries(data);
        };

        fetchEntries();
    }, []);

    return (
        <div>
            <h2>Hostel Entries</h2>
            <ul>
                {entries.map((entry, index) => (
                    <li key={index}>
                        Name: {entry.name}, Age: {entry.age}, Room Number: {entry.roomNumber}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Read;
