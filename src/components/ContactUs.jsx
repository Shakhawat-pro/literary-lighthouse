/* eslint-disable react/no-unescaped-entities */

const ContactUs = () => {
    return (
        <div>
            <div className="hero w-11/12 mx-auto mt-6  lg:h-[700px] rounded-2xl border-2 border-[#23BE0A]  text-[#23BE0A] bg-[#F4FCF3]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="ml-10">
                        <h1 className="text-5xl font-bold">Get in Touch</h1>
                        <p className="py-6 text-black">Have questions or feedback? Reach out to us! We're here to assist you with any inquiries or concerns you may have. Feel free to drop us a message, and we'll get back to you as soon as possible.                        </p>
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
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-[#23BE0A]">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered input-success " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered input-success " required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" placeholder="+880***" className="input input-bordered input-success " required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comments</span>
                                </label>
                                <textarea className="textarea textarea-success " placeholder="Comments...."></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#23BE0A] text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;