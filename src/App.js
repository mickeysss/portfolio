
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Projects from './components/Projects/Projects';
import { Route } from 'react-router-dom';
import styles from './App.module.css'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Navbar/>
      <Route path="/" exact={true} component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contacts" component={Contacts}/>
      <Footer/>
    </div>
  );
}

export default App;
