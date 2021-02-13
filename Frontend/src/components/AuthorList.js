import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
export default props => {
    const [authors, setAuthors]= useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data));
    }, [])
    const removeFromDom = authorId => {
        setAuthors(props.authors.filter(authors => authors._id != authorId))
    }
    return (
        <div>
            <Link to={"/ "+"new"}>
                            Add an author
                        </Link>
                        <p>We have quotes by:</p>
            {props.authors.sort((auth,index) => (auth.name.toLowerCase() > index.name.toLowerCase()) ? 1 : -1).map((author, idx)=>{
                return <p key={idx}>{author.name}|
                  <Link to={"/author/" + author._id + "/edit"}>
                            Edit
                        </Link>|
                        |
                       <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/></p>
               
            })}
            
        </div>
    )
}
