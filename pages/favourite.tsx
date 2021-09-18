import styles from "../styles/Favourite.module.css";
import products from "../utilites/book.json";
import Link from "next/link";
import Cart from "../components/cart";

const Favourite = () => {
  return (
    <div className="container">
      <div className={styles.__wrapper}>
        {/* Product */}
        <div className={styles._product_container}>
          <div className={styles._product_category}>
            <h5>Favourite Books</h5>
            <Link href="/">
              <a className={styles.see_more_btn}> See More</a>
            </Link>
          </div>
          <div className={styles._product_list}>
            <div className="row gx-4">
              {products.map((product) => (
                <div
                  className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6"
                  key={product.pid}
                >
                  <Cart
                    title={product.p_name}
                    thumbnails={product.p_img}
                    price={product.price}
                    discount={product.discount}
                    subtitle={product.auth.name}
                    url={`/book/${product.pid}/${product.p_name.replace(
                      /\s/g,
                      "-"
                    )}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Product End */}
      </div>
    </div>
  );
};

export default Favourite;
