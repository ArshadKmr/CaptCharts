import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import EndCredits from './components/EndCredits'
import Events from './components/Events'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import NavBar from './components/NavBar'
import UserReview from './components/UserReview'

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <About />
      <UserReview />
      <Gallery />
      <Events />
      <Footer />
      <EndCredits />
    </>
  )
}

export default App
