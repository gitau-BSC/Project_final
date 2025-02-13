import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Update() {
    const { id } = useParams(); // Assuming the entry ID is passed in the URL
    const [entry, setEntry] = useState({ name: '', age: '', roomNumber: '' });

    useEffect(() => {
        // Fetch the entry data from db.json based on the ID
        const fetchEntry = async () => {
            const response = await fetch('/db.json');
            const data = await response.json();
            const foundEntry = data.find((e) => e.id === id); // Adjust based on your data structure
            if (foundEntry) {
                setEntry(foundEntry);
            }
        };

        fetchEntry();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the updated entry to your backend or save it to db.json
        console.log('Updated Entry:', entry);
    };

    return (
        <div>
            <h2>Update Hostel Entry</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={entry.name} 
                        onChange={(e) => setEntry({ ...entry, name: e.target.value })} 
                        required 
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input 
                        type="number" 
                        value={entry.age} 
                        onChange={(e) => setEntry({ ...entry, age: e.target.value })} 
                        required 
                    />
                </div>
                <div>
                    <label>Room Number:</label>
                    <input 
                        type="text" 
                        value={entry.roomNumber} 
                        onChange={(e) => setEntry({ ...entry, roomNumber: e.target.value })} 
                        required 
                    />
                </div>
                <button type="submit">Update Entry</button>
            </form>
        </div>
    );
}

export default Update;
