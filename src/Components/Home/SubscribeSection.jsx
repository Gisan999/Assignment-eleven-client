import bg from '../../assets/bg_3.jpg'
const SubscribeSection = () => {
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right'
        }}>
            <div className='flex flex-col md:flex-row justify-center lg:gap-24 py-24 px-5 lg:px-0'>
                <div><h2 className='text-5xl font-bold font-mono'>Subscribe to our <br /> Newsletter</h2></div>
                <div>
                <div className='flex py-6'>
                                <input className='bg-gray-50 lg:pr-24 px-5 rounded-md border-4 border-red-300' placeholder='Email Address' type="email" name="email" id="" />
                                <button className='bg-sky-400 px-5 border-4 border-red-400  rounded-r-lg relative right-8 text-white font-bold'>Subscribe</button>
                            </div>
                </div>
            </div>
            
        </div>
    );
};

export default SubscribeSection;