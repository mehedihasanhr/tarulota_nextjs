// default components 
import Image from 'next/image';

// css
import styles from './navbar.module.css';

//custom components
import SearchBox from './search';
import Nav from './nav';

//utilites
import {NavItems} from '../utilites/navItems';


const Navbar = () => {
    return (
        <header>
            <div className={styles.__header}>
                <div className="container">
                    <div className={styles.__wrapper}>
                        <div className={styles.__logo}>
                            <Image 
                                src = '/logo.svg'
                                alt="Tarulota.com"
                                width={150}
                                height={60}
                            />
                        </div>

                        {/* search bar */}
                        <SearchBox />
                        
                        {/* Nav */}
                        <Nav elements = {NavItems}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;