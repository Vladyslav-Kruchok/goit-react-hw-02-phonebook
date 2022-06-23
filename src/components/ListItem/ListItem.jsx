import PropsType from "prop-types";
import React from "react";
import styles from "./ListItem.module.css";

export class ListItem extends React.Component {
    static protoType = {
        id: PropsType.string.isRequired,
        name: PropsType.string.isRequired,
        number: PropsType.string.isRequired,
        onClick: PropsType.func.isRequired
    };
    
    render() {
        const {onClick, id, name, number} = this.props;
        return (
            <>
                <li className={styles.list} key={id}>
                    <span className={styles.span}>{name}:</span>
                    <a className={styles.link} href={number}>{number}</a>
                    <button
                        className={styles.button}
                        id={id}
                        onClick={onClick}
                    >Видалити</button>
                </li>
            </>
        );
    };
};
