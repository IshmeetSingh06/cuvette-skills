import React from "react";

import { ReactComponent as ProfileIcon } from "assets/icons/profileIcon.svg";
import { ReactComponent as SettingIcon } from "assets/icons/settingIcon.svg";
import { ReactComponent as LogoutIcon } from "assets/icons/logoutIcon.svg";

import styles from "./ProfileModal.module.scss";
function ProfileModal() {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.settingItem}>
                <ProfileIcon />
                <span>View Profile</span>
            </div>
            <div className={styles.settingItem}>
                <SettingIcon />
                <span>Account Settings</span>
            </div>
            <div className={styles.settingItem}>
                <LogoutIcon />
                <span>Logout</span>
            </div>
        </div>
    );
}

ProfileModal.propTypes = {};
export default ProfileModal;
