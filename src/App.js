import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './Componentes/Layout/Footer'
import Navbar from './Componentes/Layout/NavBar'
import Container from './Componentes/Layout/Container'
import Home from './Componentes/pages/Home'
import Projects from './components/pages/Projects'
import NewProject from './Componentes/pages/NewProject'
import Company from './Componentes/pages/Company'
import Contact from './Componentes/pages/Contact'
import Project from './Componentes/pages/Projects'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/newproject">
            <NewProject />
          </Route>
          <Route path="/project/:id">
            <Project />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
