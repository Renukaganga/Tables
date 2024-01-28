import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import './Tables.css'

const Tables = () => {
    const [data,setData]=useState([])
    const fetchData=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            setData(response.data)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <div className='Tab'>
           <table>
            <thead>
           <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Mail</th>
            <th>Username</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Phone Number</th>
            <th>Website</th>
            <th>Company Name</th>
        </tr>
        </thead>
        <tbody className='c1' >
        {data.map((val) => {
                    return (
                        <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.username}</td>
                            <td>{val.address.city}</td>
                            <td>{val.address.zipcode}</td>
                            <td>{val.phone}</td>
                            <td>{val.website}</td>
                            <td>{val.company.name}</td>

                        </tr>
                    )
                })}
                </tbody>
       
        </table> 
        </div>
    );
};

export default Tables;