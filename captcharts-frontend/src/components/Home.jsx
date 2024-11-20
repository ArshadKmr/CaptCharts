import About from "./home/About"
import Banner from "./home/Banner"
import EndCredits from "./home/EndCredits"
import Events from "./home/Events"
import Footer from "./home/Footer"
import Gallery from "./home/Gallery"
import NavBar from "./home/NavBar"
import UserReview from "./home/UserReview"


const Home = () => {
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

export default Home