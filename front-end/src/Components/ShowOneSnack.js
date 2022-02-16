import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ShowOneSnack = () => {
    const [ snack, setSnack ] = useState({});
    const { id } = useParams();

    let API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(API + "/snacks/" + id)
            .then((res) => {
                console.log(res.data)
                setSnack(res.data.payload);
            });
    }, []);

    return (
        <ul>
            <li>{snack.name}</li>
            <li>{snack.image}</li>
            <li>{snack.fiber}</li>
            <li>{snack.protein}</li>
        </ul>
    )
}

export default ShowOneSnack;