import Header from '../Headder/index.js';
import Footer from '../Footer/index.js';
import Sidebar from '../Sidebar/index.js';

function DefaultLayout({ chidren }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />

                <div className="content">{chidren}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
