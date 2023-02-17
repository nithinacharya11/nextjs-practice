import Link from "next/link"

const Header = () => {
  return (
    <div>
      <ul className="flex gap-5 font-bold text-lg justify-center mt-2">
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/about'>About</Link>
        </li>
        <li>
            <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
