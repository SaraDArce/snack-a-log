import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import HeartHealth from "./HeartHealth";

const ShowOneSnack = () => {
    const [ snack, setSnack ] = useState({});
    const { id } = useParams();

    let API = process.env.REACT_APP_API_URL;

    let navigate = useNavigate();
    useEffect(() => {
        axios.get(API + "/snacks/" + id)
            .then((res) => {
                console.log(res.data)
                setSnack(res.data.payload);
            });
    }, [API, id]);

    const handleDelete = () => {
        axios
          .delete(API + "/snacks/" + id)
          .then((res) => {
            navigate("/snacks");
          })
          .catch((err) => {
            console.log(err);
          });
      };

    return (
        <div>
            < HeartHealth snackHealth={snack.is_healthy}/>
            <li>{snack.name}</li>
            <img src={snack.image} alt={snack.name} />
            <li>{snack.fiber}</li>
            <li>{snack.protein}</li>
            <Link to={`/snacks`}>
            <button>Back</button>
            </Link>
            <Link to={`/snacks/${id}/edit`}>
            <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ShowOneSnack;