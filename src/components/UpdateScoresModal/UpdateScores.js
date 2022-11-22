import React from "react";
import PropTypes from "prop-types";

import html from "assets/images/html.png";
import arrowRight from "assets/icons/arrowRight.svg";

import styles from "./UpdateScores.module.scss";

function UpdateScores(props) {
    return (
        <div
            className={styles.modalContainer}
            onClick={() => props.closeModal()}
        >
            <div
                className={styles.modal}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <div className={styles.modalTop}>
                    <div className={styles.titleText}>Update Scores</div>
                    <img src={html} alt="" />
                </div>
                <div className={styles.modalMiddle}>
                    <ul className={styles.inputList}>
                        <li>
                            <div className={styles.listItem}>
                                <div className={styles.listItemText}>
                                    Update your <span>rank</span>
                                </div>
                                <input
                                    onChange={(event) => {
                                        props.setRank(event.target.value);
                                    }}
                                />
                            </div>
                        </li>
                        <li>
                            <div className={styles.listItem}>
                                <div className={styles.listItemText}>
                                    Update your <span>percentile</span>
                                </div>
                                <input
                                    type="number"
                                    step=".01"
                                    min={0}
                                    max={100}
                                    maxLength={4}
                                    onChange={(event) => {
                                        props.setPercentile(event.target.value);
                                    }}
                                />
                            </div>
                        </li>
                        <li>
                            <div className={styles.listItem}>
                                <div className={styles.listItemText}>
                                    Update your{" "}
                                    <span>current score(out of 15)</span>
                                </div>
                                <input
                                    type="number"
                                    min={0}
                                    max={15}
                                    onChange={(event) => {
                                        props.setScore(event.target.value);
                                    }}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.modalBottom}>
                    <button
                        className={styles.cancelButton}
                        onClick={() => props.closeModal()}
                    >
                        Cancel
                    </button>
                    <button
                        className={styles.saveButton}
                        onClick={() => props.closeModal()}
                    >
                        <span>Save</span> &nbsp;
                        <img src={arrowRight} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

UpdateScores.propTypes = {
    closeModal: PropTypes.func,
    setRank: PropTypes.func,
    setScore: PropTypes.func,
    setPercentile: PropTypes.func,
};

export default UpdateScores;
