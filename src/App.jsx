import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Contacts from './Components/Contacts';
import View from './Components/View';
import Add from './Components/Add';
// import Edit from './Components/Edit';
import PageNotFound from './Components/PageNotFound';
// import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<Contacts/>}/>
        <Route path='view/:id' element={<View/>}/>
        <Route path='add/' element={<Add/>}/>
        {/* <Route path='edit/:id' element={<Edit/>}/> */}
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
