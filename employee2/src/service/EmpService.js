import axios from "axios";

// Base url for the API calls
const base_url = "http://localhost:9192";

// Created class as a component
class EmpService {

    // Method that fetch & return - All Employees
    getEmployees(){
        return axios.get(`${base_url}/employees`);
    }
}

export default new EmpService();
