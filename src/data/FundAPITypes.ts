export interface FundAPIFundResponse {
  data: FundAPIFund;
}

export interface FundAPIFund {
  summary: FundAPISummary;
  countries: FundAPICountry[];
  return: {
    oneYearReturn: number | null;
    sixMonthsReturn: number | null;
    threeMonthsReturn: number | null;
    oneMonthReturn: number | null;
    oneWeekReturn: number | null;
  };
  industries?: FundAPIIndustry[];
  holdings?: FundAPIHolding[];
}

export interface FundAPICountry {
  countryName: string;
  countryIsoCode: string;
  weight: number;
}
export interface FundAPIIndustry {
  name: string;
  weight: number;
}

export interface FundAPIHolding {
  name: string;
  weight: number;
  symbol: string;
  numberOfShares: number | null;
}

export interface FundAPISummary {
  isin: string;
  name: string;
  benchmark_index: string;
  expense_ratio: number | null;
}
