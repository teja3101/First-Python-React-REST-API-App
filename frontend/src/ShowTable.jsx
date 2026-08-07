import React, { useEffect, useState } from "react";
import { deleteById, showAllEmp } from "./services";

const ShowTable = ({ refresh, handleUpdate }) => {

    const [emp, setEmp] = useState([]);

    useEffect(() => {
        loadEmp();
    }, [refresh]);

    const loadEmp = async () => {
        try {
            const res = await showAllEmp();

            console.log("API Response:", res.data);

            setEmp(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDelete = async (id) => {
        console.log("deleted id : ", id)
        const res = await deleteById(id);
        loadEmp();
    }

    return (
        <div>
            <h2>All Employees</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Salary</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody>
                    {emp.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.role}</td>
                            <td>{e.salary}</td>
                            <td>
                                <button onClick={() => handleDelete(e.id)}>Delete</button> {" "}
                                <button onClick={() => handleUpdate(e)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default ShowTable;