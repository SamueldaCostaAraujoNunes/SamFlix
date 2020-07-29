import React from 'react';

function FormField({typeTag, label, type, name, value, onChange }){
    return(
        <div>
            <label>
                {label}: 
                <input
                    typeTag={typeTag} 
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}

export default FormField;