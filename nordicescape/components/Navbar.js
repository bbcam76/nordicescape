import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white text-lg font-bold">
                    Nordic Escape
                </div>
                <div className="space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link href="/deals" className="text-gray-300 hover:text-white">Deals</Link>
                    <Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link>
                    <Link href="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;