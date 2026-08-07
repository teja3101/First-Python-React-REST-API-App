import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/employees/";

export const showAllEmp = () => axios.get(API_URL);

export const addEmployee = (emp) => axios.post(API_URL, emp);

export const updateEmployee = (id, emp) =>
    axios.put(`${API_URL}${id}/`, emp);

export const deleteById = (id) =>
    axios.delete(`${API_URL}${id}/`);
