/* eslint-disable react/no-unescaped-entities */
import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
            <div className="w-full lg:w-1/2">
                <img className="hidden lg:block" src="https://i.ibb.co/v30JLYr/Group-192-2.png" />
                <img className="hidden md:block lg:hidden" src="https://i.ibb.co/c1ggfn2/Group-193.png" />
                <img className="md:hidden" src="https://i.ibb.co/8gTVH2Y/Group-198.png" />
            </div>
            <div className="w-full lg:w-1/2">
                <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white">Looks like you've found the doorway to the great nothing</h1>
                <p className="py-4 text-base text-gray-800 dark:text-white">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
                <p className="py-2 text-base text-gray-800 dark:text-white">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <Link className="btn btn-primary" to="/"><button>Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;