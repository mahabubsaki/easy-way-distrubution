
import Footer from '@/components/common/footer/Footer';
import BottomStickyNav from '@/components/common/navbar/BottomStickyNav';
import MiddleNav from '@/components/common/navbar/MiddleNav';
import MobileBottomNav from '@/components/common/navbar/MobileBottomNav';
import Notice from '@/components/common/navbar/Notice';
import TopNav from '@/components/common/navbar/TopNav';
import { getDB } from '@/store/db';
import React, { createContext, useEffect, useState } from 'react';
export const Context = createContext<{ cart?: any[], setCart?: React.Dispatch<React.SetStateAction<any[]>>; }>({});
const UserLayout = ({ children }: { children: React.ReactNode; }) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        setCart(getDB());
    }, []);

    return (
        <Context.Provider value={{ cart, setCart } as { cart: any[], setCart: React.Dispatch<React.SetStateAction<any[]>>; }}>
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
        </Context.Provider>
    );
};

export default UserLayout;