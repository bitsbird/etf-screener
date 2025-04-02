import WorldHealthFund from './MSCI_World_Health_Care.json';
import WorldSmallCapFund from './MSCI_World_Small_Cap.json';
import FtseIndiaFund from './Franklin_FTSE_India.json';
import type { FundAPIFund, FundAPIFundResponse } from './FundAPITypes';

const searchFund: (name: string) => Promise<FundAPIFund[]> = async (name) => {
  try {
    const p = new Promise<FundAPIFund[]>((resolve) => {
      const data: FundAPIFundResponse[] = [
        WorldHealthFund as unknown as FundAPIFundResponse,
        WorldSmallCapFund as unknown as FundAPIFundResponse,
        FtseIndiaFund as unknown as FundAPIFundResponse,
      ];
      const funds: FundAPIFund[] = data.reduce((acc: FundAPIFund[], current) => {
        if (current.data.summary.name.toLowerCase().includes(name.toLowerCase())) {
          acc.push({ ...current.data });
        }
        return acc;
      }, [] as FundAPIFund[]);
      resolve(funds);
    });
    const result = await p;
    return result;
  } catch (error) {
    throw new Error(`Error fetching fund data for ${name}: ${error}`);
  }
};

export default { searchFund };
