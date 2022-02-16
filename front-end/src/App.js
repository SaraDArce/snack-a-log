// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS

import AllSnacks from "./Components/AllSnacks";
import SnackEditForm from "./Components/SnackEditForm";
import SnackNewForm from "./Components/SnackNewForm";
// import HeartHealth from "./Components/HeartHealth";

import NavBar from "./Components/NavBar";
import ShowOneSnack from "./Components/ShowOneSnack";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/snacks" element={<AllSnacks />} />
            <Route exact path="/snacks/:id" element={<ShowOneSnack />} />
            <Route path="/snacks/:id/edit" element={<SnackEditForm />} />
            <Route path="/snacks/new" element={<SnackNewForm />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
