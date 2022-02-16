import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

const AllSnacks = () => {
    const [ snacks, setSnacks ] = useState([]);

    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(API + "/snacks")
            .then((res) => {
                setSnacks(res.data.payload);
            })
    }, [])

    let snacksToShow = snacks.map((snack, index) => {
        return (
            <div key = {index}>
                <img src={snack.image} alt={snack.name}></img>
                < HeartHealth snackHealth={snack.is_healthy}/>
                <Link to = {`/snacks/${snack.id}`}><h4>{snack.name}</h4></Link>
            </div>
            )
    })

    return(
        <div>
            <div>Showing all snacks</div>
            <ul>
                { snacksToShow }
            </ul>
        </div>
    )

};

export default AllSnacks;