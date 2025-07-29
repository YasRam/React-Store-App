import { AtSign, Copyright, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-10">
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">

                <div>
                    <h2 className="text-2xl font-bold mb-2">الرومانى</h2>
                    <p className="text-gray-400">
                        <Copyright className='inline-block' />
                        الرومانى 2025
                    </p>
                    <p className="text-gray-400">
                        جميع الحقوق محفوظة
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">عن الشركة</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li><Link to="/" className="hover:text-blue-500">رابط</Link></li>
                        <li><Link to="/" className="hover:text-blue-500">رابط</Link></li>
                        <li><Link to="/" className="hover:text-blue-500">رابط</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">روابط هامة</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li><Link to="/" className="hover:text-blue-500">الصفحة الرئيسية</Link></li>
                        <li><Link to="/products" className="hover:text-blue-500">المنتجات</Link></li>
                        <li><Link to="/cart" className="hover:text-blue-500">السلة</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">تواصل معنا</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li><Phone size={16} className='inline-block' /> 01000000000</li>
                        <li><AtSign size={16} className='inline-block' /> support@reactstore.com</li>
                        <li><MapPin size={16} className='inline-block' /> القاهرة، مصر</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">اشتراك النشرة</h3>
                    <ul className="space-y-1 text-gray-300">
                        <p>احصل على تحديثات البريد الإلكتروني حول أحدث متجرنا والعروض الخاصة.</p>                        <li><AtSign size={16} className='inline-block' /> support@reactstore.com</li>
                        <form action="" method="get">
                            <input type="email" placeholder='البريد الالكترونى' />
                            <input type="submit"  />
                        </form>
                    </ul>
                </div>
            </div>

            <div className="bg-gray-800 text-center py-4 text-gray-400 text-sm">
                <Copyright size={16} className='inline-block' />
                {new Date().getFullYear()} الرومانى. جميع الحقوق محفوظة.
            </div>
        </footer>

    )
}
