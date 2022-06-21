import PropsType from "prop-types";
import React from "react";
import styles from "./ContactList.module.css";

export class ContactList extends React.Component { 
    render() { 
        const { contacts, onClick } = this.props;
        return (
            <ul>
                {
                    contacts.map(({id, name, number}) => 
                        <li className={styles.list} key={id}>
                            <span className={styles.span}>{name}:</span>
                            <a className={styles.link} href={number}>{number}</a>
                            <button
                                className={styles.button}
                                id={id}
                                onClick={onClick}
                            >Видалити</button>
                        </li>
                    )
                }
            </ul>
        );
    };
};

ContactList.protoType = {
    contacts: PropsType.arrayOf(PropsType.shape({
            id: PropsType.string.isRequired,
            name: PropsType.string.isRequired,
            number: PropsType.string.isRequired
        }
    )),
    onClick: PropsType.func.isRequired
};