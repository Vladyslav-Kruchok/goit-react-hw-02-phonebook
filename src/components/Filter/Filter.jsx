import React from "react";
import styles from "./Filter.module.css"

export class Filter extends React.Component {
    render() { 
        const { onInput} = this.props;
        return (
            <label className={styles.label}>
                <span className={styles.span}>Find contacts by name</span>
                <input className={styles.input} type="text" id="search-box" onInput={onInput} />
            </label>
        );
    };
};