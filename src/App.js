import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/Footer"

function App() {
  return (
 <Router>
   <div>
     <Nav />
     <Switch>
       <Route exact path="/" component = {Home} />
       <Route exact path="/home" component = {Home} />
       <Route exact path="/about" component = {About} />
       <Route exact path="/contact" component = {Contact} />
       <Route exact path="/portfolio" component = {Portfolio} />
     </Switch>
    
   </div>
   <Footer />
 </Router>
  );
}

export default App;
