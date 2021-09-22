// css
import styles from "../styles/Books.module.css";

// default  components
import Head from "next/head";
import React, { useRef, useState } from "react";

// custom components
import CustomScrollbar from "../components/customScroll";
import Cart from "../components/cart";
import Checkbox from "../components/checkbox";
import { Rating } from "../components/rating";

//utilities
import { Category } from "../utilites/category";
import products from "../utilites/book.json";

//Search
const Search = ({ search, setSearch }: TSearch) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className={styles.__search_wrap}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        className={styles.__search_control}
        onChange={handleSearch}
      />
    </div>
  );
};

//Filter
const Filter = ({ header, items }: Tfilter) => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className={styles.__filter_wrapper}>
      <div className={styles.__filter_header}>{header}</div>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.__filter_items_wrapper}>
        <CustomScrollbar autoHide={true} height={200}>
          {items
            .filter(({ tag }) =>
              tag.some((el) => el.indexOf(search.toLowerCase()) > -1)
            )
            .map((item, idx) => (
              <Checkbox
                key={idx}
                pid={item.cid}
                label={item.title}
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
          <Filter header="Categorys" items={Category} />
        </div>

        <div className={styles.__filter}>
          <Filter header="Authors" items={Category} />
        </div>

        <div className={styles.__filter}>
          <Filter header="Publications" items={Category} />
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

interface TSearch {
  search: string;
  setSearch: Function;
}

interface TfilterItem {
  pid: number;
  title: string;
}

interface Tfilter {
  header: string;
  items: {
    cid: number;
    title: string;
    tag: string[];
  }[];
}
interface tfilter {
  filter: boolean;
  setFilter: Function;
}
export default Books;
