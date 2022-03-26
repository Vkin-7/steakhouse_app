import images from './CarouselData';

import Carousel from "../../components/Carousel";
import AboutUs from '../../components/AboutUs';

const Home = () => {
    return (
        <>
            <Carousel images={images}  />
            <AboutUs />
        </>
    );
}

export default Home;