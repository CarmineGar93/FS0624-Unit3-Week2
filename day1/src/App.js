import './App.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import BookList from './components/BookList';
/* import AllTheBooks from './components/AllTheBooks'; */

import fantasy from './data/fantasy.json'
import history from './data/history.json'
import horror from './data/horror.json'
import romance from './data/romance.json'
import scifi from './data/scifi.json'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const all = fantasy.concat(history.concat(horror.concat(romance.concat(scifi))))
function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome />
        <BookList array={all} />
        <div className='mb-5 invisible'>a</div>
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
