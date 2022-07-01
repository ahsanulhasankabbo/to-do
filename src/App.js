import './App.css';
import { Route, Routes } from 'react-router-dom';
import CompletedTasks from './Components/CompletedTasks/CompletedTasks';
import ToDo from './Components/ToDo/ToDo';
import Calender from './Components/Calender/Calender';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/completedTasks' element={<CompletedTasks></CompletedTasks>}></Route>
        <Route path='/to-do' element={<ToDo></ToDo>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
