import { FC, InputHTMLAttributes, Ref, forwardRef, useState } from 'react';
import { Lens } from '../icons/Lens';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'password' | 'text' | 'email' | 'number';
  placeholder: string;
  ref: Ref<HTMLInputElement>;
}

export const SearchInput: FC<SearchInputProps> = forwardRef(
  ({ placeholder, type = 'text', ref, ...rest }) => {
    const [isVisibleLens, setIsVisibleLens] = useState(true);

    return (
      <div className="relative z-10 w-full">
        {isVisibleLens && (
          <div className="absolute top-1/2 transform -translate-y-1/2 pl-3">
            <Lens />
          </div>
        )}
        <input
          ref={ref}
          maxLength={12}
          className="outline-none w-full rounded-main bg-input py-3 pl-11 pr-4 focus:pl-4 transition-all"
          onFocus={() => setIsVisibleLens(false)}
          onBlur={() => setIsVisibleLens(true)}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  },
);
