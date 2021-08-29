//default components
import Link from 'next/link';

// css
import styles from './navbar.module.css';

//icons
import { Heart, ShoppingCart } from 'react-feather';

//custom components
import SearchBox from './search';
import Nav from './nav';
import { Logo } from './logo';
import Badge from './badge';

//utilites
import {NavItems} from '../utilites/navItems';


const Navbar = () => {
    return (
        <header>
            <div className={styles.__header}>
                <div className="container">
                    <div className={styles.__wrapper}>
                        <div className={styles.__logo}> 
                            <Logo/> 
                        </div>

                        <SearchBox /> 
                        <Nav elements = {NavItems}/> 

                        <div className={styles.__action}>
                            <Link href="/fav">
                                <a className={styles.__fav}>
                                    <Badge count={3}> 
                                        <Heart strokeWidth={2} />
                                    </Badge>
                                </a>
                            </Link>

                            <Link href="/cart">
                                <a className={styles.__cart}>
                                    <Badge count={3}> 
                                        <ShoppingCart strokeWidth={2} />
                                    </Badge>
                                    <span className="ms-2">৳ 1000</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;