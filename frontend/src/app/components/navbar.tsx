const Navbar = () => {
    return(
        <nav className="bg-[DDC7BB] p-4 flex justify-between items-center">
            <h1 className=""> TheEstate</h1>
            <ul className="flex space-x-4">
                <li><a href="/home" className="text-black hover:text-gray-900">Home</a></li>
                <li><a href="/about" className="text-black hover:text-gray-900">About</a></li>
                <li><a href="/contact" className="text-black hover:text-gray-900">Contact</a></li>
                <li><a href="/login" className="text-black hover:text-gray-900">Login</a></li>
                <li><a href="/register" className="text-black hover:text-gray-900">Register</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;