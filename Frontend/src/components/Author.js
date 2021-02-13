import React, { useState } from 'react'
import { Link } from '@reach/router';
export default props => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName); 
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({name});
    }
    //onChange to update name
    return (
        <div>
        <h1>Favorite authors</h1>
        <Link to={"/ "}>
                           Home 
                        </Link>
                        <p>Add a new author:</p>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label> Name:</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>

            <input type="submit" value="Submit"/>
            <br/>
            <input type="submit" value="Cancel"/>
        </form>
        
        </div>
    )
}