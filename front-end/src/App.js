// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS

import AllSnacks from "./Components/AllSnacks";
import SnackDetails from "./Components/SnackDetails";
import SnackEditForm from "./Components/SnackEditForm";
import SnackNewForm from "./Components/SnackNewForm";
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
            <Route path="/snacks" element={<AllSnacks />} />
            <Route exact path="/snacks/:id" element={<SnackDetails />} />
            <Route path="/snacks/:id/edit" element={<SnackEditForm />} />
            <Route path="/snacks/new" element={<SnackNewForm />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
