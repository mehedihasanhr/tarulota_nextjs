//css
import styles from "../styles/Home.module.css";

//icons
import { ChevronRight } from "react-feather";

// default components
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { NextPage } from "next";

//custom components
import CustomCarousel from "../components/carousel";
import Cart from "../components/cart";
import Dropdown, { DropdownMenu, DropdownToggle } from "../components/dropdown";

//utilites
import products from "../utilites/book.json";
import { Images } from "../utilites/carouselImage";
import { MenuItems } from "../utilites/menuItem";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Tarulota.com || Home </title>
        <link rel="icon" href="/fav-icon.svg" />
      </Head>

      <div>
        <div className="container">
          {/* hero section end */}
          <div className={styles.__hero_section}>
            <div className="row">
              <div className={`col-3 ${styles.__menu_col}`}>
                <div className={styles.__menu_section}>
                  <div className={styles.__menu_head}>All Category</div>
                  <div className={styles.__menu}>
                    {MenuItems.map((el, idx) => (
                      <Dropdown float="right" key={idx}>
                        <DropdownToggle>
                          <div className={styles.__menu_item}>
                            {el.head}
                            <ChevronRight strokeWidth={1} width={14} />
                          </div>
                        </DropdownToggle>
                        <DropdownMenu>
                          <ul className={styles.__item_lists}>
                            {el.items.map((item, index) => (
                              <li key={index} className={styles.__item}>
                                <Link href={item.path}>
                                  <a className={styles.__item_link}>
                                    -- {item.title}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </DropdownMenu>
                      </Dropdown>
                    ))}
                  </div>
                </div>
              </div>

              {/* carousel */}
              <div className="col-lg-9 col-md-12 col-12">
                <div style={{ zIndex: 1 }}>
                  <CustomCarousel>
                    {Images.map((el, idx) => (
                      <div key={idx}>
                        <Image
                          src="/placeholder/bb.png"
                          alt={`slider-${idx}`}
                          width={960}
                          height={520}
                        />
                      </div>
                    ))}
                  </CustomCarousel>
                </div>
              </div>
              {/* carousel end */}
            </div>
          </div>
          {/* hero section end */}
        </div>

        <div className="container">
          {/* Product */}
          <div className={styles._product_container}>
            <div className={styles._product_category}>
              <h5>Top Sales</h5>
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
                      url={`/book/${product.url}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Product End */}
        </div>
      </div>
    </>
  );
};

export default Home;
