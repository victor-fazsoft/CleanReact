import React, { useContext } from 'react';
import Styles from './form-status-styles.scss';
import {Spinner} from '@/presentation/components';
import Context from '@/presentation/context/form/form-context'


const FormStatus = () => {
    const { state, errorState } = useContext(Context);

    return ( 
        <div data-testid="error-wrap" className={Styles.errorWrap}>
        { state.isLoading && <Spinner className={Styles.spinner}/>}
        { errorState.main && <span className={Styles.error}>Erro</span>}
    </div>
     );
}
 
export default FormStatus;