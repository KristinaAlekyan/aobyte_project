import ProductContainer from "../ProductContainer/ProductContainer"
import './main.css';

function Main ({searchString}) {	
	return (	
		<ProductContainer searchString={searchString}/>
	)
}

export default Main;