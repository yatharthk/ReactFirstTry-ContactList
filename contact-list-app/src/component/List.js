import { LinearProgress, Paper } from '@material-ui/core';
import React from 'react'

function List({loading,contacts}) {
    console.log(loading)
    console.log(contacts);
    return (
        <Paper 
        style={
            {margin:"20px auto",
            padding:"20px",
            maxWidth:"350px",
            position:"relative",
            backgroundColor:"pink"}}>
{loading? (<LinearProgress/>):(
    contacts.data.map((contact)=>{ 
        console.log("contact",contact)
        return(
            <div style={{display:"flex"}}>
                <img style={{width:"80px",
                borderRadius:"50%",
                margin:"10px 20px 0 0"}}
                src={contact.imageUrl} 
                alt={contact.firstName}></img>
                <div>
                <h4>{contact.firstName} {contact.lastName}</h4>
                <p style={{fontSize:"10px"}}>{contact.email}</p>
                </div>
            </div>
        )
    })
)}
</Paper>
    )
}

export default List;
