import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import NewCarDetails from "./NewCarDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cars/:id" element={<NewCarDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
