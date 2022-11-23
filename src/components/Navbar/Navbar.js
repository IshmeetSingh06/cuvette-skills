import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProfileModal from "components/ProfileModal/ProfileModal";

import Logo from "assets/icons/cuvetteLogo.svg";
import userImage from "assets/images/userImage.png";
import { ReactComponent as NotificationIcon } from "assets/icons/notificationBell.svg";
import { ReactComponent as DownArrow } from "assets/icons/downArrow.svg";
import { ReactComponent as UpArrow } from "assets/icons/arrowUp.svg";

import styles from "./Navbar.module.scss";

function Navbar() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLeft}>
                    <Link className={styles.cuvetteLogo} to="/">
                        <img src={Logo} alt="cuvetteLogo" />
                    </Link>
                </div>
                <div className={styles.headerRight}>
                    <ul className={styles.menuListWeb}>
                        <li
                            className={`${styles.menuListItem} ${styles.feedbackOption}`}
                        >
                            <Link className={styles.link} to="/">
                                Suggestions / Help
                            </Link>
                        </li>
                        <li className={styles.menuListItem}>
                            <div className={styles.notificationIcon}>
                                <NotificationIcon />
                            </div>
                        </li>
                        <li className={styles.menuListItem}>
                            <div
                                id="userProfileDropDown"
                                className={styles.userDropdown}
                            >
                                <img
                                    className={styles.userImage}
                                    src={userImage}
                                    alt="userProfileIcon"
                                />
                                <div className={styles.userName}>
                                    Ishmeet Singh
                                </div>
                                {modalOpen ? (
                                    <UpArrow
                                        onClick={() => setModalOpen(false)}
                                    />
                                ) : (
                                    <DownArrow
                                        onClick={() => setModalOpen(true)}
                                    />
                                )}
                                {modalOpen ? <ProfileModal /> : null}
                            </div>
                        </li>
                    </ul>
                    <ul className={styles.menuListMobile}>
                        <li className={styles.menuListItem}>
                            <div className={styles.notificationIcon}>
                                <NotificationIcon />
                                <span className=""></span>
                            </div>
                        </li>
                        <li className={styles.menuListItem}>
                            <div
                                id="userProfileDropDown"
                                className={styles.userDropdown}
                            >
                                <img
                                    className={styles.userImage}
                                    src={userImage}
                                    alt="userProfileIcon"
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

Navbar.propTypes = {};
export default Navbar;
