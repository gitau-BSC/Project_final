import { useEffect, useState } from "react";

const StudentDashboard = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        //fetch students from local storage
        fetch("http://localhost:3001/students")
        .then((res) => res.json())
        .then((data) => setStudents(data))
        .catch((err) => console.error("Error fetching students", err));

    }, []);

    return (
        <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Hostel Dashboard</h2>
        <table className="min-w-full bg-white border">
            <thead>
                <tr classname="border-b">
                    <th className="p-2">Student_id</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Room</th>
                    <th className="p-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr className="border-b" key={student.id}>
                                <td className="p-2">{student.id}</td>
                                <td className="p-2">{student.name}</td>
                                <td className="p-2">{student.room || "Not Assigned" }</td>
                                <td className="p-2">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                     {/* Navigation Menu */}
                    <nav className="mb-4">
                        <button className="mr-2 p-2 bg-blue-500 text-white rounded" onClick={() => setCurrentPage("home")}>Home</button>
                        <button className="mr-2 p-2 bg-blue-500 text-white rounded" onClick={() => setCurrentPage("create")}>Create</button>
                        <button className="mr-2 p-2 bg-blue-500 text-white rounded" onClick={() => setCurrentPage("read")}>Read</button>
                        <button className="mr-2 p-2 bg-blue-500 text-white rounded" onClick={() => setCurrentPage("update")}>Update</button>
                        <button className="p-2 bg-green-500 text-white rounded" onClick={() => setCurrentPage("dashboard")}>Dashboard</button>
                    </nav>
                    </div>
    );
};

        
export default StudentDashboard;