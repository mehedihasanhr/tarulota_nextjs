
import {Carousel} from 'react-responsive-carousel'

interface ICarousel {
    children: any;
}


 const CustomCarousel = ({children}:ICarousel) => {
    return (
        <div>
            <Carousel 
                    showArrows={false} 
                    autoPlay={true}  
                    showThumbs={false} 
                    showStatus={false}
                    infiniteLoop={true}
                    emulateTouch={true}
                >
                    {children}
                </Carousel>
        </div>
    )
}

export default CustomCarousel;