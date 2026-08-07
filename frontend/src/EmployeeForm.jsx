import React, { useEffect, useState } from 'react'
import { addEmployee, updateEmployee } from './services';

const EmployeeForm = ({ add, recieveUpdate }) => {

    const [employee, setEmployee] = useState({ name: '', role: '', salary: '' })

    useEffect(() => {

        if (recieveUpdate) {
            setEmployee(recieveUpdate)
        }

    }, [recieveUpdate])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value })
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (recieveUpdate) {
            const res = await updateEmployee(recieveUpdate.id, employee);
        } else {
            const res = await addEmployee(employee);
        }

        setEmployee({ name: '', role: '', salary: '' })
        add(1)

    }

    return (
        <div>
            <h2>{recieveUpdate ? "Update Employee Form" : "Add Employee Form"}</h2>
            <form onSubmit={handleSubmit}>
                name : <input type="text" name='name' value={employee.name} onChange={handleChange} required /> <br /><br />
                role : <input type="text" name='role' value={employee.role} onChange={handleChange} required /> <br /><br />
                salary : <input type="text" name='salary' value={employee.salary} onChange={handleChange} required /> <br /><br />

                <button type='submit'>{recieveUpdate ? "Update Employe" : "Add Employe"}</button>
            </form>
        </div>
    )
}

export default EmployeeForm