//css
import styles from "./search.module.css";

//icon
import { Search } from "react-feather";
import Image from "next/image";
import React, { useState } from "react";
import books from "../utilites/book.json";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Scrollbar from './scrollbar'
import { useRef } from "react";


interface searchProps {
  className?: string;
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

const SearchBox = ({ className }: searchProps) => {
  const [showSug, setShowSug] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const route = useRouter();

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setShowSug(true);
    setSearch(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, name: string, id: number) => {
    e.preventDefault();
    setSearch(name);
    setShowSug(false);
    route.push(`/book/${id}/${name.replace(/\s/g,'-')}`);
  };


  return (
    <div className={`${styles.__search} ${className}`}>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        onMouseDown={(e:React.MouseEvent<HTMLInputElement>) => setShowSug(true)}
        className={styles.__input}
        placeholder="Search here..."
      />
      <button className={styles.__search_btn}>
        <Search strokeWidth={2} width={20} className={styles.__search_icon} />
      </button>

      {showSug && search.length! > 0 && (
        <div className={styles.__recom} >
          <Scrollbar maxHeight={400}>
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
  );
};

export default SearchBox;
