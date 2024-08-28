import { SyntheticEvent, useState } from "react";

interface Props {}
const Search: React.FC<Props> = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onClick = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form action="">
      <input type="text" value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => onClick(e)}>Search</button>
    </form>
  );
};
export default Search;
