import React from "react";
import PropTypes from "prop-types"
import styles from "./Filter.module.css"

export class Filter extends React.Component {
    static protoType = {
        onInput: PropTypes.func.isRequired
    };
    
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