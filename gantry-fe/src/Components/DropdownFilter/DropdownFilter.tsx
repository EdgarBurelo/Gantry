import React, {useState} from 'react';
import './DropdownFilter.scss'

type DropdownFilterProps = {
    filterName: string;
    options: option[];
    checkboxOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface option {
    name: string;
}

export const DropdownFilter: React.FC<DropdownFilterProps> = ({ filterName, options, checkboxOnChange }) => {
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <div className={`dropdownFilter ${isOpen ? 'filterDisplayOpen' : ''}`}>
            <div onClick={() => setIsOpen(!isOpen)} className={'filterDisplay'}>
                <p>{filterName}</p>
                <div className={isOpen? 'iconUp': 'iconDown'}>&lt;</div>
            </div>
            {
            isOpen &&
                <div className='filterOptions'>
                    {options.map((option: option) => (
                        <div key={option.name} className='filterOption'>
                            <input
                                type="checkbox"
                                id={option.name}
                                name={option.name}
                                value={option.name}
                                onChange={checkboxOnChange}
                            />
                            <label htmlFor={option.name}>{option.name}</label>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};