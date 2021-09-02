import Image from "next/image";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Search } from "react-feather";
import styles from "./mSearch.module.css";
import books from "../utilites/book.json";
import { useRouter } from "next/router";
import Scrollbar from "./scrollbar";

interface Msearch {
  className?: string;
  show: boolean;
}

interface TProduct {
  pid: number;
  p_name: string;
  auth: {
    name: string;
    photo: string;
    about: string[];
  };
  tag?: string[];
  category: string;
  publication: string;
  rating: number;
  price: number;
  discount: number;
  quantity: number;
  language?: string;
  p_img: string;
  discription?: {
    header?: string;
    text?: string[];
  };
  reviews?: {
    review?: {
      photoUrl?: string;
      displayName?: string;
      reviewDate?: string;
      reviewText?: string;
    }[];
  };
}
[];

const MobileSearchOption = ({ className, show = false }: Msearch) => {
  const [showSearch, setShowSearch] = useState(false);
  const AutoFocus = useRef<HTMLInputElement>(null);
  const [showSug, setShowSug] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const route = useRouter();

  //show search bar
  useEffect(() => {
    setShowSearch(show);
  }, [show]);

  //auto focus
  useEffect(() => {
    if (showSearch) {
      if (AutoFocus.current) {
        AutoFocus.current.focus();
      }
    }
  }, [showSearch]);

  //scroll to hide
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowSearch(false);
    });
  }, []);

  //handle chagne
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setShowSug(true);
    setSearch(e.target.value);
  };

  //handle click
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    name: string,
    id: number
  ) => {
    e.preventDefault();
    setSearch(name);
    setShowSug(false);
    route.push(`/book/${id}/${name.replace(/\s/g, "-")}`);
    setShowSearch(false);
  };

  return showSearch ? (
    <div className={styles.__wrapper}>
      <div className={`${styles.__search} ${className}`}>
        <input
          type="text"
          className={styles.__input}
          placeholder="Search here..."
          ref={AutoFocus}
          onChange={handleChange}
          onMouseDown={(e:React.MouseEvent<HTMLInputElement>) => setShowSug(true)}
        />
        <button className={styles.__search_btn}>
          <Search strokeWidth={2} width={20} className={styles.__search_icon} />
        </button>
      </div>

      {showSug && search.length! > 0 && (
        <div className={styles.__autocom}>
          <Scrollbar maxHeight={'100vh'}>
            {books
              .filter(
                ({ tag, auth }) =>
                  tag.some((el) => el.indexOf(search.toLowerCase()) > -1) ||
                  auth.auth_tag.some(
                    (name) => name.indexOf(search.toLowerCase()) > -1
                  )
              )
              .map((product) => (
                <div
                  className={styles.__book}
                  key={product.pid}
                  onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                    handleClick(e, product.p_name, product.pid)
                  }
                >
                  <div className={styles.__product_img}>
                    <Image
                      src={product.p_img}
                      alt={`${product.pid}`}
                      width={40}
                      height={50}
                    />
                  </div>
                  <div className={styles.__product_text}>
                    <p>{product.p_name}</p>
                    <span>{product.auth.name}</span>
                  </div>
                </div>
              ))}
          </Scrollbar>
        </div>
      )}
    </div>
  ) : null;
};

export default MobileSearchOption;
