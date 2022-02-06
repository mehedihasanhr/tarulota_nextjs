import styles from "../../styles/Profile.module.css";

// default components
import Image from "next/image";
import Link from "next/link";
import Input from "../../components/input";
import Dropdown, {
  DropdownMenu,
  DropdownToggle,
} from "../../components/dropdown";
import { ChevronDown } from "react-feather";
import { useState } from "react";
import Button from "../../components/button";

import { Users } from "../../utilites/users";

const Profile = () => {
  const [name, setName] = useState<string>("Sameul Islam Simu");
  const [email, setEmail] = useState<string>("info@tarulota.com");
  const [gander, setGander] = useState<string>("");

  return (
    <div className="container">
      <div className={styles.__profile}>
        <div className="row">
          <div className={`col-md-3 ${styles.__index_menu}`}>
            <div className={styles.__profile_menu}>
              <ul className={styles.__profile_menu_list}>
                <li
                  className={`${styles.__profile_menu_item} ${styles.active}`}
                >
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </li>
                <li className={styles.__profile_menu_item}>
                  <Link href={`/profile/orders`}>
                    <a>Orders</a>
                  </Link>
                </li>
                <li className={styles.__profile_menu_item}>
                  <Link href={`/profile/wishlist`}>
                    <a>WishList</a>
                  </Link>
                </li>
                <li className={styles.__profile_menu_item}>
                  <Link href={`/`}>
                    <a>Logout</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className={`col-sm-8 col-12 ${styles.__Profile_header_mb}`}>
                <div className={styles.__profile_header}>Profile</div>
                <div className="py-3">
                  <Input
                    type="text"
                    label="Name"
                    placeholder="Name"
                    value={name}
                  />
                  <Input
                    type="text"
                    label="Email"
                    placeholder="Email"
                    value={email}
                  />
                  <Dropdown float="bottom" dd_menu={styles.__dd_menu}>
                    <DropdownToggle>
                      <div className={styles.__gander_input}>
                        <Input
                          label="Gander"
                          readonly
                          value={gander}
                          placeholder="Select Your Gander"
                        />
                        <ChevronDown
                          strokeWidth={1}
                          width={16}
                          className={`${styles.__arrow_icon}`}
                        />
                      </div>
                    </DropdownToggle>
                    <DropdownMenu>
                      <div className={styles.__gander}>
                        <ul>
                          <li onClick={(e) => setGander("Male")}>Male</li>
                          <li onClick={(e) => setGander("Female")}>Female</li>
                        </ul>
                      </div>
                    </DropdownMenu>
                  </Dropdown>
                  <div className="row">
                    <div className="col-9">
                      <Input label="Date Of Birth" placeholder="dd-mm-yyyy" />
                    </div>
                    <div className="col-sm-4 col-12">
                      <Input label="Age" placeholder="Age" />
                    </div>
                  </div>
                  <Input
                    type="text"
                    label="Phone Number"
                    placeholder="Phone Number"
                  />

                  <div className={styles.__profile_header}>
                    Shipping Address
                  </div>
                  <form className="py-3">
                    <Input type="text" label="State" placeholder="State" />

                    <Input
                      type="text"
                      label="Post Office"
                      placeholder="Post Office"
                    />

                    <Input
                      type="text"
                      label="Postal Code"
                      placeholder="Postal Code"
                    />

                    <Input type="text" label="Thana" placeholder="Thana" />

                    <Input
                      type="text"
                      label="District"
                      placeholder="District"
                    />
                  </form>

                  <div className={styles.__profile_header}>Change password</div>
                  <form className="py-3">
                    <Input
                      type="password"
                      label="Old Password"
                      placeholder="Old Password"
                    />
                    <Input
                      type="password"
                      label="New Password"
                      placeholder="New Password"
                    />
                    <Input
                      type="password"
                      label="Confirm Password"
                      placeholder="Confirm Password"
                    />
                    <Button className="mt-2">Update Password</Button>
                  </form>
                </div>
              </div>
              <div className={`col-4 ${styles.__profile_picture_mb}`}>
                <form action="" className="mt-4">
                  <div className={styles.__profile_picture_title}>
                    Profile Picture
                  </div>
                  <div className={styles.__profile_picture}>
                    <span className={styles.__profile_edit_text}>
                      <i className="bi bi-pen"></i> Edit
                    </span>
                    <input
                      type="file"
                      className={styles.__update_profile_img}
                    />

                    {Users[0].image ? (
                      <Image
                        src={'/images/sam.jpg'}
                        alt={Users[0].title}
                        width={150}
                        height={150}
                        className={styles.__profile_pic}
                      />
                    ) : (
                      <span className={styles.__picture_placeholder}>MD</span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
