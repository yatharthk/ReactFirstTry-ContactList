import React,{useEffect,useState} from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import axios from 'axios';
import List  from './component/List';

const BASE_URL="https://hub.dummyapis.com"
// const APP_ID=""

function App(){
    const [contacts, setContacts] = useState({data:[]})
    const [loading, setLoading] = useState(false)
useEffect(() => {
    setLoading(true)
        axios.get(`${BASE_URL}/employee?noofRecords=10&idStarts=1001`)
        .then(({data})=>setContacts({data}))
        .catch(console.error)
    .finally(()=>setLoading(false))    
    },[])

    return(<div>
    <Header/>
    <List loading={loading} contacts={contacts}/>
    <Footer/>
    </div>
);
}


export default App;