import Link from "next/link";

export function Header(){
    return (
        <header className="flex justify-between mb-[100px] items-center bg-amber-700 py-3 px-5">
            <div className="font-bold text-2xl text-white">
                <Link href={'/'}>H_l_WP</Link>
            </div>
            <nav>
                <ul className="flex gap-4">
                    <li className="text-white"><Link href={'/'}>Home</Link></li>
                    <li className="text-white"><Link href={'/blogs'}>Blogs</Link></li>
                    <li className="text-white"><Link href={'/about'}>About</Link></li>
                    <li className="text-white"><Link href={'/contact'}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    ) 
}
