import React from "react";

import styles from "./ProfileModal.module.scss";
function ProfileModal() {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.settingItem}>
                <img src="" />
                <span>View Profile</span>
            </div>
            <div className={styles.settingItem}>
                <img />
                <span>Account Settings</span>
            </div>
            <div className={styles.settingItem}>
                <img />
                <span>Logout</span>
            </div>
        </div>
    );
}

ProfileModal.propTypes = {};
export default ProfileModal;
