// css
import styles from "../styles/Books.module.css";

// default  components
import Head from "next/head";
import React, { useRef, useState } from "react";

// custom components
import CustomScrollbar from "../components/customScroll";
import products from "../utilites/book.json";
import Cart from "../components/cart";
import Checkbox from "../components/checkbox";
import { Rating } from "../components/rating";

//Search
const Search = () => {
  return (
    <div className={styles.__search_wrap}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.__search_control}
      />
    </div>
  );
};

//Filter
const Filter = ({ header, items }: Tfilter) => {
  return (
    <div className={styles.__filter_wrapper}>
      <div className={styles.__filter_header}>{header}</div>
      <Search />
      <div className={styles.__filter_items_wrapper}>
        <CustomScrollbar autoHide={true} height={200}>
          {[...Array(20)].map((item, idx) => (
            <Checkbox
              key={idx}
              pid={2}
              label="আধ্যাত্মিকতা ও সুফিবাদ"
              onChange={(val: any) => console.log(val)}
              className="mb-2"
            />
          ))}
        </CustomScrollbar>
      </div>
    </div>
  );
};

const FilterSection = ({ filter, setFilter }: tfilter) => {
  //sidebar ref
  const filterRef = useRef<HTMLDivElement>(null);

  //close sidebar if outside click
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (filterRef.current && !filterRef.current.contains(e.target as Element)) {
      setFilter !== undefined && setFilter(e);
    }
  };
  return (
    <div
      className={`${styles.__filter_section_wrapper} ${
        filter && styles.active
      }`}
      onClick={handleOutsideClick}
    >
      <div
        className={`${styles.__filter_section} ${filter && styles.active}`}
        ref={filterRef}
      >
        <div className={styles.__filter}>
          <Filter header="Categorys" items={[{ pid: 2, name: "work" }]} />
        </div>

        <div className={styles.__filter}>
          <Filter header="Authors" items={[{ pid: 2, name: "work" }]} />
        </div>

        <div className={styles.__filter}>
          <Filter header="Publications" items={[{ pid: 2, name: "work" }]} />
        </div>

        <div className={styles.__filter}>
          <div className={styles.__filter_wrapper}>
            <div className={styles.__filter_header}>Price</div>
            <div className={styles.__filter_items_wrapper}>
              <CustomScrollbar autoHide={true} height={200}>
                {[...Array(10)].map((r, idx) => (
                  <Checkbox
                    key={idx}
                    pid={2}
                    label={`৳ ${idx * 100 + 1} - ৳ ${(idx + 1) * 100}`}
                    onChange={(val: any) => console.log(val)}
                    className="mb-2"
                  />
                ))}
                <Checkbox
                  pid={2}
                  label={`৳ 1001 - above`}
                  onChange={(val: any) => console.log(val)}
                  className="mb-2"
                />
              </CustomScrollbar>
            </div>
          </div>
        </div>

        <div className={styles.__filter}>
          <div className={styles.__filter_wrapper}>
            <div className={styles.__filter_header}>Rating</div>
            <div className={styles.__filter_items_wrapper}>
              {[...Array(5)].map((r, idx) => (
                <Checkbox
                  key={idx}
                  pid={2}
                  component={<Rating rating={idx + 1} />}
                  onChange={(val: any) => console.log(val)}
                  className="mb-2"
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.__filter}>
          <div className={styles.__filter_wrapper}>
            <div className={styles.__filter_header}>Language</div>
            <div className={styles.__filter_items_wrapper}>
              <Checkbox
                pid={2}
                label="বাংলা"
                onChange={(val: any) => console.log(val)}
                className="mb-2"
              />
              <Checkbox
                pid={2}
                label="ইংরেজি"
                onChange={(val: any) => console.log(val)}
                className="mb-2"
              />

              <Checkbox
                pid={2}
                label="আরবি"
                onChange={(val: any) => console.log(val)}
                className="mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// books
const Books = () => {
  const [filter, setFilter] = useState<boolean>(false);

  const handleFilterOptions = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFilter(!filter);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Tarulota.com || Books </title>
        <link rel="icon" href="/fav-icon.svg" />
      </Head>

      <div className="container">
        <div className={styles.__wrapper}>
          <FilterSection filter={filter} setFilter={handleFilterOptions} />
          <div className={styles.__body_section}>
            <div className={styles.__header}>
              Books
              <button
                className={styles.__filter_btn}
                onClick={handleFilterOptions}
              >
                Filter
              </button>
            </div>
            <div className="row gx-3">
              {products.map((product) => (
                <div
                  className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6"
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
      </div>
    </>
  );
};

interface TfilterItem {
  pid: number;
  title: string;
}

interface Tfilter {
  header: string;
  items: {
    pid: number;
    name: string;
  }[];
}
interface tfilter {
  filter: boolean;
  setFilter: Function;
}
export default Books;
