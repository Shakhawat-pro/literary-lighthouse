import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);
    console.log(tabIndex)
    return (
        <div className="w-11/12 mx-auto mt-10">
            <div className="bg-[#F3F3F3] text-center py-16 rounded-2xl">
                <h2 className="text-2xl font-bold">Books</h2>
            </div>
            <div className="text-center my-20">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white">Sort By
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 border-2 border-[#23BE0A] rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number Of Pages</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>
                    <TabPanel>
                        {/* Book from Book will creat a arry after clicking read <a>. and that arry will map hear
                          */}
                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBook;