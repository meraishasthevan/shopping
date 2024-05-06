import './App.css';

//Routing
import {BrowserRouter,Routes,Route} from "react-router-dom";

//Cmponents
import Header from './Components/Header';
import Product from './Components/Product';
import DetailPage from './Components/DetailPage.js';

function App() {
  return (
      <BrowserRouter>
           <div>
             <Header/>
             <Routes>
               <Route path='/' element={<Product/>}/>
               <Route path='/detailpage' element={<DetailPage/>}/>
             </Routes>
           </div> 
      </BrowserRouter>
  );
}

export default App;
