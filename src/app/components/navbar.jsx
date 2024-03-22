"use client"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import NavLink from "./navLink";
import {motion} from "framer-motion";

const links = [
    {url:"/", title:"Home"},
    {url:"/about", title:"About"},
    {url:"/portfolio", title:"Portfolio"},
    {url:"/contact", title:"Contact"},
];

const Navbar = () => {

    const [open,setOpen] = useState(false);

    const topVariant = {
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            background:"rgb(255,255,255)"
        }
    }

    const centerVariant = {
        closed:{
            opacity:1,
        },
        opacity:1,
        opened:{
            opacity:0,
        }
    }

    const bottomVariant = {
        closed:{
            rotate:0,
        },
        opened:{
            rotate:-45,
            background:"rgb(255,255,255)"
        }
    }

    const listVariants = {
        closed:{
            x:"100vh",
        },
        opened:{
            x:0,
            transition:{
                staggeredChildren:0.2,
            }
        },
    }

    const listItemVariants = {
        closed:{
            x:-10,
            opacity:0,
        },
        opened:{
            x:0,
            opacity:1,
        }
    }

    
    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 ms:px-12 lg:px-28 xl:px-48 text-xl'>
            {/* LINKS */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map((link)=>(
                    <NavLink link={link} key={link.title}/>
                ))}
            </div>
            {/* LOGO */}
            <div className="md:hidden lg:flex w-1/3 justify-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold">
                    <span className="text-white mr-1">Lama</span>
                    <span className="w-122 h-8 rounded bg-white text-black flex items-center justify-center">.Dev</span>
                </Link>
            </div>
            {/* SOCIAL */}
            <div className="hidden md:flex gap-4 w-1/3">
                <Link href="https://github.com/akhileshawachat">
                    <Image src="/github.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/akhilesh-awachat-873914191/">
                    <Image src="/linkedin.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://leetcode.com/akhileshawachat65/">
                    <Image src="/leetcode.png" alt="" width={24} height={24} />
                </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className="md:hidden">
                {/* MENU BUTTON */}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(()=>setOpen(!open))}>
                    <motion.div variant={topVariant} 
                        animate={open ? "opened" : "closed"}
                        className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                    <motion.div variant={centerVariant} 
                        animate={open ? "opened" : "closed"}
                        className='w-10 h-1 bg-black rounded'></motion.div>
                    <motion.div variant={bottomVariant} 
                        animate={open ? "opened" : "closed"}
                        className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                </button>
                {/* MENU LIST */}
                {open && (
                <motion.div variants={listVariants} initial="closed" animate="closed" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col item-center justify-center gap-8 text-4xl z-40">
                    {links.map(link=>(
                        <motion.div variants={listItemVariants} className="" key={link.title}>
                        <Link href={link.url} >{link.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>
                )}
            </div>
        </div>
    )
}

export default Navbar