import React, { useContext } from 'react';
import Styles from './form-status-styles.scss';
import {Spinner} from '@/presentation/components';
import Context from '@/presentation/context/form/form-context'


const FormStatus = () => {
    const { state } = useContext(Context);
    const {isLoading, mainError} = state;

    return ( 
        <div data-testid="error-wrap" className={Styles.errorWrap}>
        { isLoading && <Spinner className={Styles.spinner}/>}
        { mainError && <span className={Styles.error}>{mainError}</span>}
    </div>
     );
}
 
export default FormStatus;