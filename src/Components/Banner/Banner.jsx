import { Carousel } from 'flowbite-react';
import blog from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpeg'
import blog3 from '../../assets/blog3.jpeg'
import blog4 from '../../assets/blog4.jpeg'
import blog5 from '../../assets/blog5.webp'
import blog6 from '../../assets/blog6.jpeg'
import blog7 from '../../assets/blog7.webp'
import blog8 from '../../assets/blog8.webp'
import blog9 from '../../assets/blog10.webp'
const Banner = () => {
    return (
        <div>
            <div className="grid h-96 lg:grid-cols-2 lg:gap-4 sm:h-[650px] xl:h-[650px] ">
                <Carousel>
                    <img className='h-full' src={blog2} alt="..." />
                    <img className='h-full' src={blog3} alt="..." />
                    <img className='h-full' src={blog4} alt="..." />
                    <img className='h-full' src={blog5} alt="..." />
                    <img className='h-full' src={blog6} alt="..." />

                </Carousel>
                <Carousel className='invisible lg:visible'>
                    {/* indicators={false} */}
                    <img className='h-full' src={blog} alt="..." />
                    <img className='h-full' src={blog7} alt="..." />
                    <img className='h-full' src={blog7} alt="..." />
                    <img className='h-full' src={blog8} alt="..." />
                    <img className='h-full' src={blog9} alt="..." />
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;