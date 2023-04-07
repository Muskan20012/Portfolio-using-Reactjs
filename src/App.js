import './index.css';
import Contact from './components/Contact';
import Fetch from './components/Fetch';
import { Route,Routes
 } from 'react-router-dom';
import Main from './components/Main';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Header from './components/Header';

function App() {
 
  return (
   <>
  
   <Routes>
      <Route path='*' element={<Main/>}/>
      <Route path='/fetch-data' element={<Fetch/>}/>
      <Route path='/contact-form' element={<Contact/>}/>
      <Route path='/testimonials' element={<Testimonials/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/faq' element={<Faq/>}/>
    </Routes>    
   </>
  );
}

export default App;
