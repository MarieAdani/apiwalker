import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [ category, setCategory ] = useState('');
    const [ id, setId ] = useState('')
    const navigate = useNavigate ();

    const handleSubmit = (e) => { 
        e.preventDefault();
        navigate(`/${category}/${id}`);
        //navigate ("/" + category "/" + id);

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Searchn for:</label>
                <select defaultValue={"DEFAULT"} onChange={(e) => setCategory (e.target.value)}>
                    <option value="DEFAULT">Select One</option>
                    <option value="people">People</option>
                    <option value="starchips">Starchips</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>

                </select>


                <label>ID:</label>
                <input type="text" onChange={(e) => setId(e.target.value)}></input>
                <input type="submit" value="Search"></input>
            </form>

        </div>
    );
}


export default Form;