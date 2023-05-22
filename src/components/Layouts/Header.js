import { Link } from "react-router-dom";
import logo from '../../assests/logo.png'
import { GearFill } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";
import { CartCheckFill } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
export const Header = () => {
    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link href="https://flowbite.com" className="flex items-center">
                        <img src={logo} className="h-8 mr-3" alt="Ebook" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ebook</span>
                    </Link>
                    <div className="flex items-center">
                        <GearFill className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5" />
                        <Search className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5" />
                        <CartCheckFill className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5" />
                        <PersonCircle className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5" />
                    </div>
                </div>
            </nav>
        </header>
    )
}
