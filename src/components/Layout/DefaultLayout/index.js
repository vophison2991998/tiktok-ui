import Header from '../Headder/index.js';
import Footer from '../Footer/index.js';
import Sidebar from '../Sidebar/index.js';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />

                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
