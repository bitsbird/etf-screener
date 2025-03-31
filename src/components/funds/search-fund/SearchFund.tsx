import { FC } from 'react';
import InputSearch from '../../base/input-search/InputSearch';
import usePropertyHook from '../../base/hooks/usePropertyHook';
import Style from './searchFund.module.css';

const SearchFund: FC = () => {
  const { property, setPropertyValue } = usePropertyHook<string>('');
  const onSearch: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log('Searching for:', property);
    // Add your search logic here
  };
  return (
    <div className={Style.searchFund}>
      <div>
        <InputSearch keyword={property} onSetKeyword={setPropertyValue} />
      </div>
      <div>
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
};
export default SearchFund;
