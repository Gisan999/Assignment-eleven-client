import Swal from 'sweetalert2';
import bg from '../../assets/bg_3.jpg'
const SubscribeSection = () => {

    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email;
        // console.log(email);
        // let input1 = document.getElementById('input1');
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thank you for subscribing to our  newsletter',
            showConfirmButton: false,
            timer: 1500
        })
        
        // input1.value = "";
        email.value = '';
    }

    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right'
        }}>
            <div className='flex flex-col md:flex-row justify-center lg:gap-24 py-48 px-5 lg:px-0 border border-purple-200'>
                <div className='border-l-8 pl-3 border-l-indigo-600'><h2 className='text-5xl font-bold font-mono effect'>Subscribe to our <br /> Newsletter</h2></div>
                <div>
                    <form name='contact-form' onSubmit={handleSubscribe}>
                        <div className='flex py-6'>

                            <input  className='bg-gray-50 lg:pr-32 px-5 rounded-md border py-3.5 border-red-300' placeholder='Email Address' required type="email" name="email" id="input1" />
                          
                            <input   className='bg-indigo-500 px-5 border border-red-400  rounded-r-lg relative right-8 text-white font-bold' type="submit" value="Subscribe" />
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default SubscribeSection;