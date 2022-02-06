import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import { TemplateProvider } from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <TemplateProvider>
        <ContextProvider>
            <BrowserRouter>
              <Header />
                <Routes>      
                    <Route path='/' element={<Home/>} />
                    <Route path='/cart' element={<Cart/>} />
                </Routes>
      
            </BrowserRouter>
        </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
