import Axios from "axios";

class TodoDataService {

    retrieveAllTodos(name) {
        //console.log('executed service');
        return Axios.get(`http://localhost:8080/users/${name}/todos`);
    }
}

export default new TodoDataService()