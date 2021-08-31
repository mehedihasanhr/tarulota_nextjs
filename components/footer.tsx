import Image from 'next/image'
import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles._footer_container}>
            <div className="container">
                <div className={styles._top_footer}>
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-md-12  mb-4">
                            <div className={`${styles._footer_logo} `}>
                                <Image
                                    src="/logo.svg"
                                    alt="Tarulota.com"
                                    width={150}
                                    height={60}
                                />
                            </div>
                            <p className={styles._footer_text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, tempora illum praesentium quisquam distinctio laudantium.
                            </p>
                            <div className={styles._footer_helpline}>
                                <div className={styles._footer_help_icon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#11AE68" className="bi bi-headset" viewBox="0 0 16 16">
                                            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                                    </svg>
                                </div>
                                <div className={styles._footer_help_text}>
                                    <p>Got questions?Call us 24/7!</p>
                                    <h6>01900-000000</h6>
                                </div>
                            </div>
                            <div className={styles._brand_link}>
                                <Link href="/">
                                    <a className={styles._brand_icon_link}>
                                        <FontAwesomeIcon icon={faFacebookF} className={styles._brand_icon}/>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a className={styles._brand_icon_link}>
                                        <FontAwesomeIcon icon={faYoutube} className={styles._brand_icon}/>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a className={styles._brand_icon_link}>
                                        <FontAwesomeIcon icon={faTwitter} className={styles._brand_icon}/>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-4 col-6">
                            <div className={styles._footer_header}>Turolota</div>
                            <ul className={styles._footer_quick_list}>
                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > Home </a>
                                    </Link>
                                </li>

                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > About Tarulota </a>
                                    </Link>
                                </li>

                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > Join with Tarulota </a>
                                    </Link>
                                </li>

                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > Terms {'&'} Conditions </a>
                                    </Link>
                                </li>


                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > {"FAQ's"} </a>
                                    </Link>
                                </li>

                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > Contact Us </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-4 col-6">
                            <p className={styles._footer_header}>Category</p>
                            <ul className={styles._footer_quick_list}>
                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > Bookshop </a>
                                    </Link>
                                </li>

                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > Electronics </a>
                                    </Link>
                                </li>

                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > Mobile Accessories </a>
                                    </Link>
                                </li>

                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > {"Men's Shopping"} </a>
                                    </Link>
                                </li>


                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > {"Women's Shopping"} </a>
                                    </Link>
                                </li>

                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > {"Kid's Shopping"} </a>
                                    </Link>
                                </li>
                                
                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > Home {"&"} Gardening </a>
                                    </Link>
                                </li>

                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > Sports {"&"} Outdoor </a>
                                    </Link>
                                </li>

                            </ul>
                        </div>


                        <div className="col-xxl-3 col-xl-3 col-md-4 col-sm-4 col-6">
                            <div className={styles._footer_header}>Others</div>
                            <ul className={styles._footer_quick_list}>
                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > My Account </a>
                                    </Link>
                                </li>

                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > Order Tracking </a>
                                    </Link>
                                </li>

                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > Wish List </a>
                                    </Link>
                                </li>

                                <li className={styles._footer_quick_item}>
                                    <Link href="/">
                                        <a className={styles._footer_quick_link} > Contact Us </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles._bottom_footer}>
                <div className="container">
                    <div className={styles._bottom_footer_container}>
                        <p> &copy; Tarulota.com-All Rights Reserved </p>
                        <div className={styles._footer_payment_list}>
                            <Link href ='/'>
                                <a className={`${styles._footer_payment_options} me-2`}> 
                                    Cash On Delivery 
                                </a>
                            </Link>
                            <Link href ='/'>
                                <a className={`${styles._footer_payment_options} mx-2`}> 
                                    bKash
                                </a>
                            </Link>
                            <Link href ='/'>
                                <a className={`${styles._footer_payment_options} ms-2`}> 
                                    Nagad
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer