import axios from "axios";
import { CompanySearch } from "./company";
interface SearchRepsonse {
  data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
  try {
    console.log("API Key: ", process.env.REACT_APP_API_KEY);
    const data = await axios.get<SearchRepsonse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=QhQFNQFlW1gZa6Wk5b4bQhy2dCpRPyD5`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:" + error.message);
    }
    else{
      console.log("unexpected error ",error);
      return "unexpected error occured"
    }
  }
};
