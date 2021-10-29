import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';

import routes from './routes';

function App() {
  return (
    <div className="app">
      <Header />
      <main className='container'>
        {routes}
      </main>
      <Footer />
    </div>
  );
}

export default App;
