// import logo from './logo.svg';
import './index.css';
import Header from './components/Header';
import Contact from './components/Contact';
// import Newcontact from './components/Newcontact';
import Fetch from './components/Fetch';
import Footer from './components/Footer';
import { Route,Routes
 } from 'react-router-dom';
import Main from './components/Main';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';

function App() {
 
  return (
   <>
  
 <Header/> 
 {/* <Main/> */}
   <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/fetch-data' element={<Fetch/>}/>
      <Route path='/contact-form' element={<Contact/>}/>
      <Route path='/testimonials' element={<Testimonials/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/faq' element={<Faq/>}/>


    </Routes>
    <Footer/> 
    
     
      
   </>
  );
}

export default App;
