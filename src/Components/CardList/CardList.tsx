import Card from "../Card/Card";

interface Props {

}
const CardList : React.FC<Props>=():JSX.Element=>{
  return(
   <>
    <Card companyName="Microsoft" ticker="MSFT"price={200} />
    <Card companyName="Apple" ticker="Apl"price={100} />
    <Card companyName="Google" ticker="Ggl"price={250} />
   </>
  )
}
export default CardList