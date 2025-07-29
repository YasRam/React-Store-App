import { GiftIcon, HeartIcon, ShoppingCartIcon, UserRoundCogIcon } from "lucide-react";
import { Link } from "react-router-dom";
import React from 'react';

export const Navbar = () => {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 ">
                الرومانى
            </Link>
            <div className="flex gap-4 items-center ">
                <Link to="/" className="hover:text-blue-500 text-center">الصفحة الرئيسية</Link>
                <Link to="/products" className="hover:text-blue-500 text-center">المتجر</Link>
                <Link to="/cart" className="hover:text-blue-500 text-center">العروض</Link>
                <Link to="/cart" className="hover:text-blue-500 text-center">عن الشركة</Link>
                <Link to="/cart" className="hover:text-blue-500 text-center">تواصل معنا</Link>
            </div>
            <div className="flex gap-4">
                <ShoppingCartIcon size={24} className="text-gray-700 hover:text-blue-500 cursor-pointer" />                <Link to="/cart" className="hover:text-blue-500" />
                <UserRoundCogIcon size={24} className="text-gray-700 hover:text-blue-500 cursor-pointer" />                <Link to="/cart" className="hover:text-blue-500" />
                <GiftIcon size={24} className="text-gray-700 hover:text-blue-500 cursor-pointer" />                <Link to="/cart" className="hover:text-blue-500" />
                <HeartIcon size={24} className="text-gray-700 hover:text-blue-500 cursor-pointer" />                <Link to="/cart" className="hover:text-blue-500" />
            </div>
        </nav>
    )

}

// export default Navbar