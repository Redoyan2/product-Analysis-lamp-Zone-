import './Home.css';
import img1 from '../images/lamp8.PNG';
import Reviews from '../Reviews/Reviews';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <div className='home-main'>
                <div className='home-details text-orange-500  text-left ml-9 m-9'>
                    <h1 className='text-6xl m-8'><span className='text-gray-600 '>PREMIUM LAMP</span> ZONE</h1>
                    <p>Web analytics is the process of analyzing the behavior of visitors to a website. This involves
                        tracking, reviewing and reporting data to measure web activity,
                        including the use of a website and its components, such as webpages, images and videos.
                        Analytics is the process of analyzing the behavior of visitors to a website. This involves tracking, reviewing and reporting data to measure web activity, including the use of a website and its 
                        components, such as webpages, images and videos.</p>
                    <button>Find Your Lamps</button>
                </div>
                <div className='home-img'>
                    <img src={img1} alt="" />
                </div>

                {/* Customer reviews section  */}

                <div>
                    <div className='customer-reviews'>
                        <h2>Customer Reviews </h2>
                        <Reviews></Reviews>

                    </div>
                    <div className='all-btn'>
                        <Link className='link-btn' to='/reviews'>See All Reviews</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 