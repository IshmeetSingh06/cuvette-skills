import React from "react";
import PropTypes from "prop-types";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import styles from "./Graph.module.scss";

const data = [
    { name: "0%", Total: 1200 },
    { name: "20%", Total: 2100 },
    { name: "40%", Total: 800 },
    { name: "60%", Total: 1600 },
    { name: "80%", Total: 900 },
];

function Graph(props) {
    return (
        <div className={styles.graph}>
            <ResponsiveContainer width="100%" aspect={props.aspect}>
                <AreaChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="#8884d8"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#8884d8"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <Tooltip className={styles.tooltip} />
                    <Area
                        type="monotone"
                        dataKey="Total"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#total)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

Graph.propTypes = {
    aspect: PropTypes.number,
};
export default Graph;
