import { FC } from 'react';
import InputSearch from '../../base/input-search/InputSearch';
import usePropertyHook from '../../hooks/usePropertyHook';
import Style from './searchFund.module.css';
import FundAPI from './../../../data/FundAPI';

const SearchFund: FC = () => {
  const { property: keyword, setPropertyValue: setKeyword } = usePropertyHook<string>('');
  const onSearch: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (keyword.length > 3) {
      FundAPI.searchFund(keyword)
        .then((funds) => {
          console.log(funds[0]?.summary);
        })
        .catch((error) => {
          console.error('Error fetching funds:', error);
        });
    } else {
      console.log('Keyword must be at least 4 characters long');
    }
  };

  return (
    <div className={Style.SearchFund}>
      <div className={Style.Input}>
        <InputSearch keyword={keyword} onSetKeyword={setKeyword} />
      </div>
      <div>
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
};
export default SearchFund;
