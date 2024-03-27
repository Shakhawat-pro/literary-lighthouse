
const AboutUS = () => {
    return (
        <div>
            <div className="hero w-11/12 mx-auto mt-6  lg:h-[700px] rounded-2xl border-2 border-[#23BE0A]  text-[#23BE0A] bg-[#F4FCF3]">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/public/books/colleg1.png" className="max-w-sm rounded-lg shadow-2xl mr-10" />
                    <div>
                        <h1 className="text-5xl font-bold">Celebrating Our Journey: The Story of Literary Lighthouse</h1>
                        <p className="py-6 text-black">Established in 2023, <span className="font-semibold">Literary Lighthouse</span> has evolved into a beacon of innovation and excellence. beacon in the literary landscape, fostering creativity, enlightenment, and exploration. With aCommunity of <span className="font-semibold">100K</span> dedication to literary excellence and community engagement, We have become a hub for writers, readers, and enthusiasts alike. Join us as we illuminate the path forward, inspiring minds and sparking conversations across the literary spectrum.
                        </p>
                        <button className="btn btn-accent text-white">Join Us Now</button>
                        <div className="flex gap-4 mt-5">
                            <button>
                                <img className="w-[30px]" src="/public/books/facebook-svgrepo-com.svg" alt="" />
                            </button>
                            <button>
                                <img className="w-[30px]" src="/public/books/instagram-svgrepo-com.svg" alt="" />
                            </button>
                            <button>
                                <img className="w-[30px]" src="/public/books/twitter-svgrepo-com.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUS;