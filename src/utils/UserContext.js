import {createContext} from 'react';


const UserContext = createContext({user:{
    name: "dummyName", // It is a dummy data of context which we can modify later on.
    email: "dummy@gmail.com"
}
    
})

export default UserContext;