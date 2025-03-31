import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
interface FundData {
  Name: string;
  Symbol: string;
  Description: string;
}
const SearchFund = () => {
  const [fundData, setFundData] = useState<FundData | null>(null);
  useEffect(() => {
    getFundData().then((data) => {
      setFundData(data);
    });
  }, []);
  return (
    <div>
      <label>SearchFund</label>
      <input type="search" placeholder="search for ETF" />
      <div>
        {fundData && (
          <div>
            <div>{fundData.Name}</div>
            <div>{fundData.Symbol}</div>
            <div>{fundData.Description}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const getFundData = async () => {
  const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;
  try {
    const response: AxiosResponse = await axios.get('https://www.alphavantage.co/query', {
      params: {
        function: 'OVERVIEW',
        symbol: 'IBM',
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default SearchFund;
