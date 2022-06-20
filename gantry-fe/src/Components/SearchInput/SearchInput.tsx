import React from "react";
import './SearchInput.scss'

type SearchInputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    disabled?: boolean;
    type: "number"| "text" | "password"
}

export const SearchInput: React.FC<SearchInputProps> = ({ onChange, placeholder, disabled= false, type }) => {
  return (
      <div className="searchInput">
          <input
              id="searchInputField"
              disabled={disabled}
              onChange={onChange}
              placeholder={placeholder}
              type={type}
          />
      </div>
    );
};