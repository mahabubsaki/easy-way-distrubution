
import Footer from '@/components/common/footer/Footer';
import BottomStickyNav from '@/components/common/navbar/BottomStickyNav';
import MiddleNav from '@/components/common/navbar/MiddleNav';
import MobileBottomNav from '@/components/common/navbar/MobileBottomNav';
import Notice from '@/components/common/navbar/Notice';
import TopNav from '@/components/common/navbar/TopNav';
import React from 'react';

const UserLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <div className='App relative'>
            <nav>
                <Notice />
                <TopNav />
                <MiddleNav />
                <BottomStickyNav />
                <MobileBottomNav />
            </nav>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default UserLayout;