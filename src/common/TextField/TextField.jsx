import React from 'react';
import PropTypes from 'prop-types';

export const TextField = (props) => {

    const { label, dataTestId, name, type='text', required=false, value, onChange} = props

    return(
        <div>
            <label
            className="block text-sm font-medium leading-6 text-gray-900"
            >
            {label}
            </label>
            <div className="mt-2">
            <input
                value={value}
                data-testid={dataTestId}
                onChange={ e => onChange(e.target.value)}
                name={name}
                type={type}
                required={required}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            </div>
      </div>
    )
}

TextField.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    dataTestId: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool

}