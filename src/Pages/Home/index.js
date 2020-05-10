// Node Modules imports
import React from 'react';

// Local imports
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Home() {
    return (
        <div className="home">
           <Header />
           <Main />
           <Footer />
        </div>
    );
}

export default Home;