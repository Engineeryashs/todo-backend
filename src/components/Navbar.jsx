export function Navbar() {
    return (
        <nav className="flex bg-gray-700 h-10 text-white justify-between content-center py-2">
            <div>
                <span className="mx-8 text-xl">iTask</span>
            </div>
            <ul className="flex gap-4 mx-8">
                <li className="cursor-pointer hover:text-cyan-200 hover:font-bold transition-all duration-500">Home</li>
                <li className="cursor-pointer hover:text-cyan-200 hover:font-bold transition-all duration-500">Your Tasks</li>
                <li className="cursor-pointer border rounded-full w-[30px] h-[30px] text-center">Hi</li>
            </ul>
        </nav>

    )
}