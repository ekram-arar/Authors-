import React , { useEffect, useState } from 'react';
import Author from '../components/Author';
import AuthorList from '../components/AuthorList';
import axios from 'axios';
export default () => {
    const [author, setAuthor] = useState([]); //const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000//api/authors')
            .then(res=>{
                setAuthor(res.data);
               // setLoaded(true);
            });
    },[])
    const createAuthor = authors => {
        axios.post('http://localhost:8000/api/author/create', authors)
            .then(res=>{
                setAuthor([...author, res.data]);
            })
    }
    return (
        <div>
            <Author onSubmitProp={createAuthor} initialName=""/>
            <br/>

         
           
        </div>
    )
}
