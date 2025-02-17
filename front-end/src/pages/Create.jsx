import React, { useState } from 'react';

function Create() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [roomNumber, setRoomNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { name, age, roomNumber };

        // New entry saved to db.json
        console.log('New Entry:', newEntry);

        // form fields reset
        setName('');
        setAge('');
        setRoomNumber('');
    };

    return (
        <div>
            <h2>New Hostel Entry</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input 
                        type="number" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Room Number:</label>
                    <input 
                        type="text" 
                        value={roomNumber} 
                        onChange={(e) => setRoomNumber(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Add Entry</button>
            </form>
        </div>
    );
}

export default Create;
