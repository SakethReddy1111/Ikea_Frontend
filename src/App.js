import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import OfferBar from './components/OfferBar';
import ProductsBar from './components/ProductsBar';

function App() {
  return (
    <div className="App">
      <OfferBar/>
      <PrimarySearchAppBar/>
      <ProductsBar/>
     <Footer/>
    </div>
  );
}

export default App;
