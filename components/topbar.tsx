import styles from './topbar.module.css';

// default Components
import Link from 'next/link';
import { Download, Phone, User, UserPlus } from 'react-feather';

const Topbar = () =>{
    return (
        <div className={styles._topbar}>
            <div className="container">
                <div className={styles._tb_header}>
                    <div className={styles._tb_wc_msg}>
                        Welcome to Tarulota
                    </div>
                    <ul className={styles._tb_nav}>
                        <li className={styles._tb_nav_item}>
                            <Phone strokeWidth={2} width={13} />
                            <Link href="tel:01518309205">
                                <a className={styles._tb_nav_link}> 01518-309205 </a>
                            </Link>
                        </li>

                        <li className={styles._tb_nav_item}>
                            <User strokeWidth={2} width={13}  />
                            <Link href="/">
                                <a className={styles._tb_nav_link}> Account </a>
                            </Link>
                        </li>

                        <li className={styles._tb_nav_item}>
                            <UserPlus strokeWidth={2} width={13} />
                            <Link href="/login">
                                <a className={styles._tb_nav_link} style={{borderRight: 0}}> Sign in </a>
                            </Link>
                            <span>Or</span>
                            <Link href="/register">
                                <a className={styles._tb_nav_link}> Sign up </a>
                            </Link>
                        </li>

                        <li className={styles._tb_nav_item}>
                            <Download strokeWidth={2} width={13} />
                            <Link href="/">
                                <a className={styles._tb_nav_link} style={{borderRight: 0, paddingRight: 0}}> Download App </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Topbar;