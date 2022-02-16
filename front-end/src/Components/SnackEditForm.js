import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    image: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: true,
  });

  const updateSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(
        () => {
          navigate(`/snacks/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

 
  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then(
      (response) => setSnack(response.data.payload),
      (error) => navigate(`/snack-not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Snack"
          required
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          pattern="http[s]*://.+"
          //   required?
          value={snack.image}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="integer"
          name="fiber"
          value={snack.fiber}
          placeholder="0"
          onChange={handleTextChange}
        />
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="integer"
          name="protein"
          value={snack.protein}
          placeholder="0"
          onChange={handleTextChange}
        />
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          type="integer"
          name="added_sugar"
          value={snack.added_sugar}
          placeholder="0"
          onChange={handleTextChange}
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/snacks/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default SnackEditForm;
