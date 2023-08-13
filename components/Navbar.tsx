import styles from './Navbar.module.css'
import ActiveLink from "./ActiveLink"

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
    return (
        <nav className={ styles['menu-container'] }>
            { 
                menuItems.map((item, index) => (
                    <ActiveLink key={ index } text={ item.text } url={ item.href } />
                ))
            }
            {/* <ActiveLink text="Home" url="/">Home</ActiveLink> */}
            {/* <ActiveLink text="Home" url="/">Home</ActiveLink> */}
            {/* <ActiveLink text="Home" url="/">Home</ActiveLink> */}
        </nav>
    )
}

export default ActiveLink