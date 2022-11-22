import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import target from "assets/images/target.png";

import styles from "./DonutChart.module.scss";

function DonutChart() {
    return (
        <div className={styles.donutChart}>
            <CircularProgressbarWithChildren value={85}>
                <img
                    style={{ width: 40, marginTop: -5 }}
                    src={target}
                    alt="target"
                />
            </CircularProgressbarWithChildren>
        </div>
    );
}

DonutChart.propTypes = {};

export default DonutChart;
