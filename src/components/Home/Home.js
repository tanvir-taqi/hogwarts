import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className=' pt-20 md:pt-16 lg:pt-0 z-10'>
            <div className="hero min-h-screen  hero-container" >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Welcome To <span className='text-4xl font-semibold font-mono shadow-sm text-green-200'>Hogwarts School of Witchcraft and Wizardry</span> </h1>
                        <p className="mb-5"> <b> Hogwarts School of Witchcraft and Wizardry,</b> often shortened to Hogwarts, was the British wizarding school, located in the Scottish Highlands. It accepted magical students from Great Britain and Ireland for enrolment. It was a state-owned school, funded by the Ministry of Magic.</p>
                        <button className="btn btn-outline text-green-300 font-bold">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;