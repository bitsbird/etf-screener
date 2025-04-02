import { FC } from 'react';
import type { PropertySetter } from '../../hooks/usePropertyHook';
const InputSearch: FC<{ keyword: string; onSetKeyword: PropertySetter<string> }> = ({
  keyword,
  onSetKeyword,
}) => {
  return (
    <input
      type="search"
      placeholder="Search"
      value={keyword}
      onChange={(e) => onSetKeyword(e.target.value)}
    />
  );
};

export default InputSearch;
