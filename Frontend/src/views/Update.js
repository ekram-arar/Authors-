import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Author from '../components/Author';
import { Link } from '@reach/router';
export default props => {
    const { id } = props;
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors'+id)
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true);
            });
    },[])
    const updateAuthor = authors=> {
        axios.put('http://localhost:8000/api/authors' + id, authors)
            .then(res => console.log(res));
    }
    return (
        <div>
             <h1>Favorite authors</h1>
             <Link to={"/ "}>
                           Home 
                        </Link>
                        <p>Edit this author:</p>
        {loaded && (
            <Author
                onSubmitProp={updateAuthor}
                initialName={author.name}
            />
        )}
        </div>
    )
}
