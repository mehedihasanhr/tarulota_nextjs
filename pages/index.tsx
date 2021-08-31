import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import { MenuItems } from "../utilites/menuItem";

// default components
import Head from "next/head";
import Dropdown, { DropdownMenu, DropdownToggle } from "../components/dropdown";
import Link from "next/link";
import { ChevronRight } from "react-feather";
import CustomCarousel from "../components/carousel";
import { Images } from "../utilites/carouselImage";
import Image from "next/image";

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
      <main>
        <div className="container">
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
                                    {" "}
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
              <div className="col-lg-9 col-md-12 col-12">
                <div style={{zIndex: 1}}>
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
