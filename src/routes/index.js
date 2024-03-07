import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import { HeaderOnly } from '../components/layouts';
import Search from '../pages/Search';
//khong cần đăng nhập vẫn xem  các trang khác
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// phải đăng nhập mới xem
const privateRoutes = [];

export { publicRoutes, privateRoutes };
