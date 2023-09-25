import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => {

    const { label, onClick, dataTestId } = props

    return(
        <div>
            <button
                data-testid={dataTestId}
                onClick={onClick}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                {label}
            </button>
        </div>
    )

}

Button.propTypes = {
    label: PropTypes.string, 
    onClick: PropTypes.func,
    dataTestId: PropTypes.string

}