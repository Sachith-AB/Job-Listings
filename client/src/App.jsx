import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

import ForgotPassword from './pages/ForgotPassword';

import PosterCompanyInfo from './pages/Poster.CompanyInfo';
import PosterFountInfo from './pages/Poster.Found-Info';
import PosterSocailMediaInfo from './pages/Poster.SocailMediaInfo';
import Contact from './pages/Contact';
import Finish from './pages/Finish';
import PosterDashboard from './pages/Poster.Dashboard';
import SeekerDashboard from './pages/Seeker.Dashboard';
import PartTimeJobPost from './components/Post.PartTimeJobPost'
import FulltimeJobPost from './components/Post.FulltimeJobPost';



export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>

    <Route path='/forgot-password' element={<ForgotPassword/>}/>

    <Route path='/company-info' element={<PosterCompanyInfo/>}/>
    <Route path='/found-info' element={<PosterFountInfo/>}/>
    <Route path='/social-info' element={<PosterSocailMediaInfo/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/finish' element={<Finish/>}/>
    <Route path='/poster-dashboard' element={<PosterDashboard/>}/>
    <Route path='/seeker-dashboard' element={<SeekerDashboard/>}/>
    <Route path='/parttime-job-post' element={<PartTimeJobPost/>}/>
    <Route path='/fulltime-job-post' element={<FulltimeJobPost/>}/>


  </Routes>
  <Footer/>
</BrowserRouter>
    
}
