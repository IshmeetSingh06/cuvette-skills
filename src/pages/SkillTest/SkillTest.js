import React, { useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "react-circular-progressbar/dist/styles.css";
import html from "assets/images/html.png";
import rankImage from "assets/images/yourRank.png";
import percentileImage from "assets/images/percentile.png";
import correct from "assets/images/correctAnswers.png";
import stocks from "assets/images/stocks.png";
import { ReactComponent as DownArrow } from "assets/icons/downArrow.svg";
import { ReactComponent as DashboardIcon } from "assets/icons/dashboardIcon.svg";
import { ReactComponent as InternshipsIcon } from "assets/icons/internshipsIcon.svg";
import { ReactComponent as MessagesIcon } from "assets/icons/messagesIcon.svg";
import { ReactComponent as SkillTestIcon } from "assets/icons/skillTestIcon.svg";

import styles from "./SkillTest.module.scss";

import UpdateScores from "components/UpdateScoresModal/UpdateScores";
import Graph from "components/Graph/Graph";
import DonutChart from "components/DonutChart/DonutChart";

function SkillTest() {
    const [active, setActive] = useState("Skill Test");
    const [listActive, setListActive] = useState(false);
    const [updateModal, setModalOpen] = useState(false);
    const [rank, setRank] = useState("12,890");
    const [percentile, setPercentile] = useState("37");
    const [score, setScore] = useState("07");

    return (
        <>
            <div className={styles.skillTestContainer}>
                <div className={styles.skillTestLeft}>
                    <div className={styles.optionsContainer}>
                        <div className={styles.options}>
                            <div className={styles.optionItem}>
                                <Link to="/">
                                    <div
                                        className={`${styles.navigation} ${
                                            active === "Dashboard"
                                                ? styles.active
                                                : ""
                                        }`}
                                        onClick={() => setActive("Dashboard")}
                                    >
                                        <DashboardIcon />
                                        Dashboard
                                    </div>
                                </Link>
                                <div className={styles.toggleList}>
                                    <div
                                        className={`${
                                            styles.internshipsNavigation
                                        } ${
                                            active === "Internships"
                                                ? styles.active
                                                : ""
                                        }`}
                                        onClick={() => setActive("Internships")}
                                    >
                                        <InternshipsIcon />
                                        <div className={styles.internshipsText}>
                                            Internships
                                        </div>
                                        <DownArrow
                                            onClick={() =>
                                                setListActive(!listActive)
                                            }
                                        />
                                    </div>
                                    {listActive && (
                                        <div className={styles.navigationList}>
                                            <Link
                                                className={`${styles.navigation} ${styles.child}`}
                                                to="/"
                                            >
                                                Browse
                                            </Link>
                                            <Link
                                                className={`${styles.navigation} ${styles.child}`}
                                                to="/"
                                            >
                                                Applied
                                            </Link>
                                            <Link
                                                className={`${styles.navigation} ${styles.child}`}
                                                to="/"
                                            >
                                                Bookmark
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <Link href="/app/student/messages">
                                    <div
                                        className={`${styles.navigation} ${
                                            active === "Skill Test"
                                                ? styles.active
                                                : ""
                                        }`}
                                        onClick={() => setActive("Skill Test")}
                                    >
                                        <div>
                                            <SkillTestIcon />
                                        </div>
                                        Skill Test
                                    </div>
                                </Link>
                                <Link href="/app/student/messages">
                                    <div
                                        className={`${styles.navigation} ${
                                            active === "Messages"
                                                ? styles.active
                                                : ""
                                        }`}
                                        onClick={() => setActive("Messages")}
                                    >
                                        <div>
                                            <MessagesIcon />
                                        </div>
                                        Messages
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.skillTestMiddle}>
                    <div className={styles.middleContainer}>
                        <div className={styles.middleTest}>Skill Test</div>
                        <div className={styles.skillUpdateBlock}>
                            <div className={styles.skillBlock}>
                                <img src={html} alt="html" />
                                <div className={styles.skillName}>
                                    <span>Hypertext Markup Language</span>
                                    <p>
                                        Questions: 08 | Duration: 15 mins |
                                        Submitted on 5 June 2021
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    setModalOpen(true);
                                }}
                            >
                                Update
                            </button>
                        </div>
                        <div className={styles.skillStatistics}>
                            <div className={styles.quickText}>
                                Quick Statistics
                            </div>
                            <div className={styles.statsBlock}>
                                <div className={styles.statInfo}>
                                    <img src={rankImage} alt="" />
                                    <div className={styles.statsText}>
                                        <span>{rank}</span>
                                        <p>YOUR RANK</p>
                                    </div>
                                </div>
                                <div className={styles.statInfo}>
                                    <img src={percentileImage} alt="" />
                                    <div className={styles.statsText}>
                                        <span>{percentile}%</span>
                                        <p>PERCENTILE</p>
                                    </div>
                                </div>
                                <div className={styles.statInfo}>
                                    <img src={correct} alt="" />
                                    <div className={styles.statsText}>
                                        <span>{score} / 15</span>
                                        <p>CORRECT ANSWERS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.skillGraph}>
                            <div className={styles.quickText}>
                                Quick Statistics
                            </div>
                            <div className={styles.scores}>
                                <div className={styles.scoreText}>
                                    <span>You scored 37% percentile</span> which
                                    is lower than the
                                    <br />
                                    average percentile 72% of all the engineers
                                    who took this assessment
                                </div>
                                <img src={stocks} alt="" />
                            </div>
                            <Graph aspect={2 / 1} />
                        </div>
                    </div>
                </div>
                <div className={styles.skillTestRight}>
                    <div className={styles.skillAnalysis}>
                        <div className={styles.quickText}>
                            Syllabus wise Analysis
                        </div>
                        <div className={styles.analysisBar}>
                            <span>HTML Tools, Forms, History</span>
                            <div className={styles.skillBar}>
                                <div
                                    className={`${styles.barContainer} ${styles.html}`}
                                >
                                    <div className={styles.skill}></div>
                                </div>
                                <div className={styles.percentageHtml}>80%</div>
                            </div>
                        </div>
                        <div className={styles.analysisBar}>
                            <span>Tags & References in HTML</span>
                            <div className={styles.skillBar}>
                                <div
                                    className={`${styles.barContainer} ${styles.tags}`}
                                >
                                    <div className={styles.skill}></div>
                                </div>
                                <div className={styles.percentageTags}>60%</div>
                            </div>
                        </div>
                        <div className={styles.analysisBar}>
                            <span>Tables & CSS Basics</span>
                            <div className={styles.skillBar}>
                                <div
                                    className={`${styles.barContainer} ${styles.tables}`}
                                >
                                    <div className={styles.skill}></div>
                                </div>
                                <div className={styles.percentageTables}>
                                    24%
                                </div>
                            </div>
                        </div>
                        <div className={styles.analysisBar}>
                            <span>Tables & CSS Basics</span>
                            <div className={styles.skillBar}>
                                <div
                                    className={`${styles.barContainer} ${styles.tablesSecond}`}
                                >
                                    <div className={styles.skill}></div>
                                </div>
                                <div className={styles.percentageTablesSecond}>
                                    96%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.questionAnalysis}>
                        <div className={styles.questionSolved}>
                            <div className={styles.quickText}>
                                Question Analysis
                            </div>
                            <span>07/15</span>
                        </div>
                        <div className={styles.scoreText}>
                            <span>
                                You scored 7 question correct out of 15.
                            </span>{" "}
                            However it still needs some improvements
                        </div>
                        <DonutChart />
                    </div>
                </div>
            </div>
            {updateModal == true ? (
                <UpdateScores
                    setRank={setRank}
                    setScore={setScore}
                    setPercentile={setPercentile}
                    closeModal={() => setModalOpen(false)}
                />
            ) : null}
        </>
    );
}

SkillTest.propTypes = {};
export default SkillTest;
