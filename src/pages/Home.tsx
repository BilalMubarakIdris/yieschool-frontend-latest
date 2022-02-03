import Services from "../components/services/services"
import WhyChoose from "../components/whychoose/whyChoose"
import YIEButton from "../YIEUI/YIEButton"

const Home = () => {
    return (
        <div>
            Home Page
            <YIEButton content="Button One" bgColor="red" />
            <YIEButton content="Button One" bgColor="blue" />
            <WhyChoose/>
            <Services/>
        </div>
    )
}

export default Home