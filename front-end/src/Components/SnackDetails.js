import { Link, Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_API_URL;

function SnackDetails() {
  const [snack, setSnack] = useState({});
  let { id } = useParams();
  useEffect(() => {
    // http://localhost:3333/snacks/1
    axios
      .get(API + "/snacks/" + id)
      .then((res) => {
        setSnack(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, API]);

  const handleDelete = () => {
    axios
      .delete(API + "/snacks/" + id)
      .then((res) => {
        Navigate("/snacks/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <article>
      <h3>
        {true ? (
          <span>{front - end / src / assets / heart - solid.png}</span>
        ) : null}{" "}
        {snack.name}
      </h3>
      <h5>
        <span>
          <a href={snack.image}>{snack.name}</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {snack.image}
      </h5>
      {/* <h6>{snack.fiber}</h6>
      <p>{snack.added_sugar}</p> */}
      <div className="showNavigation">
        <div>
          <Link to={`/snacks/${snack.id}/edit`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/snacks/id/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default SnackDetails;
