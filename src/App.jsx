import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dash.jsx' 
import Home from './pages/home.jsx'
import Maps from './pages/maps.jsx' 
import Navbar from './components/layout/navbar.jsx'
import Footer from './components/layout/footer.jsx'

const basename = 'trackfy-desafio/'

function App() {
  return (
    <Router basename={basename}> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<Maps />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
