import './App.css';
import Home from './Home';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onlinebooking from './Onlinebookin';
import Overall from './Overall';
import SignupPage from './components/page/SignupPage';
import Login from './components/organisms/Login';
import Header from './components/organisms/Header';
import MainSection from './components/organisms/Mainsection';
import Project from './components/organisms/Project';
import Worktog from './components/organisms/Worktog';
import Useasexetens from './components/organisms/Useasexetens';
import Customizesction from './components/organisms/Customizesction';
import Workevery from './components/organisms/Workevery';
import Datasecurity from './components/organisms/Datasecurity';
import Favoriteapps from './components/organisms/Favoriteapps';
import TestimonialsSection from './components/organisms/TestimonialsSection';
import Trywhitepace from './components/organisms/Trywhitepace';
import Footer from './components/organisms/Footer';
import PricingPage from './components/templates/PricingPage';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/onlinebooking' element={<Onlinebooking />} />
          <Route path='/' element={<Overall />} />
          <Route path='/header' element={<Header />} />
          <Route path='/singuppage' element={<SignupPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mainsection' element={<MainSection />} />
          <Route path='/project' element={<Project />} />
          <Route path='/work' element={<Worktog />} />
          <Route path='/useasexe' element={<Useasexetens />} />
          <Route path=' custmize' element={<Customizesction />} />
          <Route path='/workevery' element={<Workevery/>}/>
          <Route path='/datesecrity'element={<Datasecurity/>}/>
          <Route path='/Favoriteapp' element={<Favoriteapps/>}/>
          <Route path='/testimonials' element={<TestimonialsSection/>}/>
          <Route path='/trywhite' element={<Trywhitepace/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/prices'element={<PricingPage/>}/>






        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
