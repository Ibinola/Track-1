// import './App.css';

import 'bulma/css/bulma.min.css'
import 'react-calendar/dist/Calendar.css';
import Button from './components/button';
import Calendars from './components/calendar';
import Navbar from './components/navbar';
import Practice from './components/practice';
function App() {
  return (
    <div className="App">
      <Navbar> </Navbar> 
     {/* <Calendars/> */}
     <Practice />
    </div>
  );
}

export default App;
