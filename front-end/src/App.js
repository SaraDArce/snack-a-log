// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS

import SnackEditForm from "./Components/SnackEditForm";
import AllSnacks from "./Components/AllSnacks";
import SnackNewForm from "./Components/SnackNewForm";
import SnackDetails from "./Components/SnackDetails";
// import HeartHealth from "./Components/HeartHealth";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <h1>Snacks</h1>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/snacks/:id" element={<SnackDetails />} />
            <Route path="/snacks" element={<AllSnacks />} />
            <Route path="/snacks/new" element={<SnackNewForm />} />
            <Route path="/snacks/:id/edit" element={<SnackEditForm />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
