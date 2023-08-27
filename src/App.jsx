import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Courses from './pages/Course/Courses';
import Home from './pages/Home';
import DashBoard from "./pages/DashBoard";
import About from "./pages/About"
import Completed from "./pages/Completed";
import Webdetail from './pages/Course/Webdetail';
import Appdetail from './pages/Course/Appdetail';
import AIdetail from './pages/Course/AIdetail';
import Dataanalyicts from './pages/Course/Dataanalyicts';
import Clouddetail from './pages/Course/Clouddetail';
import Reactdetail from './pages/Course/Reactdetail';
import Nextdetail from './pages/Course/Nextdetail';
import Htmlcssjs from './pages/Course/Htmlcssjs';
import Kotlindetail from './pages/Course/Kotlindetail';
import Flutterdetail from './pages/Course/Flutterdetail';
import AIcourse from './pages/Course/AIcourse';
import MLcourse from './pages/Course/MLcourse';
import Datasciencedetail from './pages/Course/Datasciencedetail';
import Dfull from './pages/Course/Dfull';
import AWSdetail from './pages/Course/AWSdetail';
import Azuredetail from './pages/Course/Azuredetail';
import Powerbidetail from './pages/Course/Powerbidetail';
import Register from './components/Register';
import Login from "./components/Login";
import TermCondition from './pages/TermCondition';
import Help from './pages/Help';
import ContactForm from './components/ContactForm';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/about" element={<About />} />
                <Route path="/Courses" element={<Courses />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/courses-completed" element={<Completed />} />
                <Route path="/Web" element={<Webdetail />} />
                <Route path="/App" element={<Appdetail />} />
                <Route path="/AI" element={<AIdetail />} />
                <Route path="/Data" element={<Dataanalyicts />} />
                <Route path="/Cloud" element={<Clouddetail />} />
                <Route path="/Dscience" element={<Datasciencedetail />} />
                <Route path="/React" element={<Reactdetail />} />
                <Route path="/Next" element={<Nextdetail />} />
                <Route path="/Basic" element={<Htmlcssjs />} />
                <Route path="/Kotlin" element={<Kotlindetail />} />
                <Route path="/Flutter" element={<Flutterdetail />} />
                <Route path="/AICourse" element={<AIcourse />} />
                <Route path="/MLCourse" element={<MLcourse />} />
                <Route path="/Datasciencecourse" element={<Dfull />} />
                <Route path="/AWS" element={<AWSdetail />} />
                <Route path="/Azure" element={<Azuredetail />} />
                <Route path="/Powerbi" element={<Powerbidetail />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/terms' element={<TermCondition />} />
                <Route path='/help' element={<Help />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

