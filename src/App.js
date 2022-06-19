import './App.css';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom"
import Home from './Pages/Home';
import Error from './Pages/Error';
function App() {
  return (
   
<>






<Router>
  <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/*" element={<Error />}></Route>

    </Routes>

    
</Router>

</>

  );
}

export default App;
