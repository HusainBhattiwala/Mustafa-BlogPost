import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <nav className="bg-gray-800 p-4 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-bold text-2xl">My Blogs</div>
                    <div className="flex space-x-4">
                        <Link href="/" passHref>
                            <button className={`text-white px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}>
                                Home
                            </button>
                        </Link>
                        <Link href="/blogs" passHref>
                            <button className={`text-white px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/blogs' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}>
                                Blogs
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
            <main className="container mx-auto flex-grow mt-4 p-4">
                {children}
            </main>
        </div>
    );
}
