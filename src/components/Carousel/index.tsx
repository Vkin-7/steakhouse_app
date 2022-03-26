import { useEffect, useRef, useState } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import styled from "styled-components";

interface CarouselProps extends WithTranslation {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ t, images }) => {
    const [current, setCurrent] = useState(0);
    const { length } = images;
    // seconds quantity to change slide
    const DELAY = 5;
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }

    const nextSlide = () => {
        setCurrent(prevState => prevState === length - 1 ? 0 : prevState + 1);
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => nextSlide(), DELAY * 1000 
        );

        return () => {
            resetTimeout();
        }

    }, [current]);

    return (
        <CarouselContainer>
            {images.map((image, index) => current === index && (
                <ImageContainer key={index} src={image} />
            ))}
        </CarouselContainer>
    );
}

export default withTranslation()(Carousel);

export const CarouselContainer = styled.section`
    height: 100vh;

    position: relative;
    display: flex;

    justify-content: center;
    align-items: center;
`

export const ImageContainer = styled.img`
    width: 70vw;
    height: 80vh;

    border-radius: .5rem;

    animation: 1s ease-out 0s 1 fadeAnimation;

    @media(max-width: 800px) {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
`