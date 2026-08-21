
export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-center items-center gap-8">
                <li className="hover:bg-gray-600 cursor-pointer">Home</li>
                <li className="hover:bg-gray-600 cursor-pointer">About</li>
                <li className="hover:bg-gray-600 cursor-pointer">Contact</li>
            </ul>
        </nav>
    )
}