import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Router from "./routes_route"
import Footer from "./components/Footer"

function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Router />
    <Footer/>
    </BrowserRouter>
  )
}

export default App
