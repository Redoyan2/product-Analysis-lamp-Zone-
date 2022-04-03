import './Home.css';
import img1 from '../images/lamp8.PNG';
const Home = () => {

    return (
        <div>
            <div className='home-main'>
            <div className='home-details text-orange-500  text-left ml-9 m-9'>
                <h1 className='text-6xl m-8'><span className='text-gray-600 '>PREMIUM LAMP</span> ZONE</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
                    assumenda. Quos, veniam facere voluptatem quasi assumenda neque
                    corrupti amet voluptate beatae recusandae suscipit quam commodi
                    excepturi libero dolorum autem voluptates minima ullam aut ea
                    fugiat laborum obcaecati. Cupiditate expedita perspiciatis
                    tempora eligendi modi suscipit facilis blanditiis,
                    ipsa nemo quo. Vel!</p>
                    <button>Find Your Lamps</button>
            </div>
            <div className='home-img'>
                <img src={img1} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Home; <h1>This is Home</h1>