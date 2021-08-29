import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <header>
            <div className={styles.__header}>
                <div className="container">
                    <div className={styles.__header_items}></div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;