import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";

import SkillTest from "pages/SkillTest/SkillTest";

import "./styles/main.scss";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<SkillTest />} />
            </Routes>
        </Router>
    );
}

export default App;
