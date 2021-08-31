import Image from 'next/image'
import Link from 'next/link'
import styles from './cart.module.css'

interface cart{
    thumbnails: string;
    discount: number;
    title: string;
    price: number;
    subtitle: string;
    url: string
}


const Cart = ({
    thumbnails,
    discount,
    title,
    price,
    subtitle,
    url
}:cart) => {
    return (
        <Link href={url}>
            <a className={styles._cart_link}>
                <div className={styles._cart}>
                    <span className={styles._discount_badge}>{discount}%</span>
                    <div className={styles._cart_image}>
                        <Image 
                            src={thumbnails}
                            alt="placeholder/amitopu.jpg"
                            width={200}
                            height={250}
                        />
                    </div>
                    <p className={`${styles._cart_title} ${styles._cart_title_name}`}>
                            {title}
                    </p>
                    <p className={styles._cart_title}>
                        {subtitle}
                    </p>
                    <div className={styles._cart_product_price}>
                        ৳ {price - price*discount/100}
                        <sub><del>৳ {price}</del></sub>
                    </div>
                    
                </div>
            </a>
        </Link>
    )
}

export default Cart;