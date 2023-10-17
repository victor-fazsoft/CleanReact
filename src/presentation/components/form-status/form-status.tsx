import React, { useContext } from 'react';
import Styles from './form-status-styles.scss';
import {Spinner} from '@/presentation/components';
import Context from '@/presentation/context/form/form-context'


const FormStatus = () => {
    const { isLoading, errorMessage } = useContext(Context);
    return ( 
        <div data-testid="error-wrap" className={Styles.errorWrap}>
        { isLoading && <Spinner className={Styles.spinner}/>}
        { errorMessage && <span className={Styles.error}>Erro</span>}
    </div>
     );
}
 
export default FormStatus;