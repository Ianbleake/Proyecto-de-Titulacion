import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoMdList } from "react-icons/io";
import { IoMdBriefcase } from "react-icons/io";
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'

export const Footer = () => {
    return (
        <footer className='w-full h-12 bg-emerald-700 text-white fixed bottom-0 z-50 flex justify-around items-center'>
                <Link className='mr-2' to="/"><IoMdHome className='h-10 w-10'/></Link>
                <Link className='mr-2' to="/nosotros"><IoMdList className='h-10 w-10'/></Link>
                <Link className='' to="/Login"><IoMdBriefcase className='h-10 w-10'/></Link>
                <Link className='' to="/carrito"><CartWidget/></Link>
        </footer>
    )
}
