import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../../assets/istockphoto-1174677845-612x612.jpg'
import img2 from '../../assets/chemistry.webp'



const CarouselItem = ({ description, headline, image }) => (
    <div className="carousel-item">
        <img src={image} alt={headline} />
        <h3>{headline}</h3>
        <p>{description}</p>
    </div>
);



const CarouselBox = () => {
    return (
        <>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={2000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                draggable
                focusOnSelect={false}
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                responsive={{
                    desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 5,
                        partialVisibilityGutter: 40,
                    },
                    mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1,
                        partialVisibilityGutter: 30,
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 3,
                        partialVisibilityGutter: 30,
                    },
                }}
                showDots={false}
                slidesToSlide={1}
                swipeable
            >
                <CarouselItem
                    description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
                    headline="w3js.com - web front-end studio"
                    image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <CarouselItem
                    description="React Carousel with Server Side Rendering Support – Part 2"
                    headline="w3js.com - web front-end studio"
                    image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                />
                <CarouselItem
                    description="React Carousel with Server Side Rendering Support – Part 2"
                    headline="w3js.com - web front-end studio"
                    image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                />
                <CarouselItem
                    description="React Carousel with Server Side Rendering Support – Part 2"
                    headline="w3js.com - web front-end studio"
                    image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                />
                <CarouselItem
                    description="React Carousel with Server Side Rendering Support – Part 2"
                    headline="w3js.com - web front-end studio"
                    image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                />
                <CarouselItem
                    description="React Carousel with Server Side Rendering Support – Part 2"
                    headline="w3js.com - web front-end studio"
                    image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                />
                {/* Add more items as needed */}
            </Carousel>
        </>
    )
}

export default CarouselBox;