import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Main_questionpage from './Components/Main_questionpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Question from './Components/Question';
import Viewquestion from './Components/Viewquestion';
import axios from 'axios';

const App = () => {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    async function getQuestion() {
      await axios.get("http://localhost:4000/api/user/question").then((res) => {
        setQuestions(res.data.reverse());
        console.log(res.data)
      });
    }
    getQuestion();
  }, []);
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Sidebar /><Main_questionpage question={questions} /></>} />
        <Route path="/login" element={<><Login /></>} />
        <Route path="/register" element={<><Register /></>} />
        <Route path="/question" element={<><Navbar /><Question /></>} />
        <Route path="/viewquestion" element={<><Navbar /><Sidebar /><Viewquestion /></>}
        />
      </Routes>
    </BrowserRouter>

  );
};

export default App;