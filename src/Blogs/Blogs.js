import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='content-container'>
            <div className='content-box'>
                <h1>Content Api</h1>
                <p>
                    Content API is a RESTful API that lets advertisers programmatically manage their Microsoft Merchant Center catalogs. Content API is an alternative to managing your catalog using the Microsoft Merchant Center web page or by using FTP/SFTP. Content API has the following advantages:

                    Provides the ability to update product offers incrementally rather than uploading the entire data feed. Being able to update a subset of your products is more efficient than having to upload the entire feed by using FTP/SFTP.

                    Provides the ability to make changes to product pricing and availability to reflect close to real-time market conditions. For example, if your product goes out of stock, you can quickly update its Availability field using the Content API.

                    Provides the ability to batch together large numbers of items to process in a single request. A batch operation can include inserts, deletes, and updates. Using batch operations is a more efficient use of resources than using single operation calls (for example, a single insert operation).

                    Provides the ability to download catalog status reports.

                    Provides the ability to manage your catalogs programmatically.
                </p>
            </div>
            <div className='content-box'>
                <h1>Semantic Tag </h1>
                <p>

                    Semantic HTML elements are those that clearly describe their meaning in a human-
                    and machine-readable way. Elements such as header , footer and article are all
                    considered semantic because they accurately
                    describe the purpose of the element and the type of content that is inside them

                </p>
            </div>
           
        </div>
    );
};

export default Blogs; <h1>This is blogs </h1>