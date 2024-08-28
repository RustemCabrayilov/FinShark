interface Props {
  companyName: string;
  ticker: string;
  price: number;
}
const Card : React.FC<Props>=({companyName,ticker,price}):JSX.Element=>{
  return(
    <div className="card">
      <h2>{companyName}({ticker})</h2>
      <p>${price}</p>
     
    </div>
  )
}
export default Card