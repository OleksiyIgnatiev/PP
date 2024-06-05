import React from 'react'
import style from './BackArrow.module.css'
import useStore from '../../state/useStore';
const BackArrow = () => {
    const goBack = () => {
        window.history.back();
    };
    const { theme } = useStore();
    return (
        <div className={`${style.arrow} ${theme == 'black' ? style.blackTheme : ''}`} onClick={goBack}>
            <svg width="26" height="23" viewBox="0 0 26 23" fill="" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.689341 10.3143C0.103554 10.9001 0.103554 11.8499 0.689341 12.4357L10.2353 21.9816C10.8211 22.5674 11.7708 22.5674 12.3566 21.9816C12.9424 21.3958 12.9424 20.4461 12.3566 19.8603L3.87132 11.375L12.3566 2.88972C12.9424 2.30393 12.9424 1.35419 12.3566 0.768398C11.7708 0.182611 10.8211 0.182611 10.2353 0.768398L0.689341 10.3143ZM25.1875 9.875L1.75 9.875V12.875L25.1875 12.875V9.875Z" fill={theme == 'black'? '#fff' : '#000'} />
            </svg>
        </div>
    )
}

export default BackArrow
