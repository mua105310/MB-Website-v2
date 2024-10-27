import { FaInstagram } from 'react-icons/fa';
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import Link from 'next/link';

export default function SocialMediaTag (){
    const items = [
        {
            icon: <FaInstagram />,
            link: 'https://www.instagram.com/moveboks/'
        },
        {
            icon: <IoLogoFacebook />,
            link: 'https://www.facebook.com/moveboks'
        },
        {
            icon: <IoLogoTiktok />,
            link: 'https://www.tiktok.com/@moveboks'
        }
    ]
    return (
        <div className='flex mx-auto sm:mx-0'>
            {items.map((item) => (
                <Link key={item.link} href={item.link}>
                    <div className='w-auto h-auto border-[1px] p-2 ml-2 hover:bg-[var(--secondary)] transition-all ease-in-out duration-500 hover:text-white'>
                            {item.icon}
                    </div>
                </Link>
            ))}
        </div>
    )
}