import React from 'react';
import Styles from './input-styles.scss';

interface Props {
    type: string,
    name: string,
    placeholder: string
}



const Input = (props: Props) => {

    return ( 
        <input className={Styles.input}type={props.type} name={props.name} placeholder={props.placeholder} />
     );
}
 
export default Input;