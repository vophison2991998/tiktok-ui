import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
//khong cần đăng nhập vẫn xem  các trang khác
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];

// phải đăng nhập mới xem
const privateRoutes = [];

export { publicRoutes, privateRoutes };
