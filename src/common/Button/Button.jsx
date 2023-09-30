import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from '../Loading/Loading';

export const Button = props => {

    const { label, onClick, dataTestId, disabled=false, loading = false} = props
    const classname =  `${disabled && loading ? 'opacity-30' : ''} 
                        ${ loading && disabled ? '' : 'hover:bg-indigo-500'} 
                        flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`
    
    return(
        <div>
            <button
                data-testid={dataTestId}
                onClick={onClick}
                className={classname}
                disabled={disabled}
                >
                    {loading && <Loading />}
                {label}
            </button>
        </div>
    )

}

Button.propTypes = {
    label: PropTypes.string, 
    onClick: PropTypes.func,
    dataTestId: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,

}