import React from 'react'
import Product from '../../src/Product'

const products = [
  {
    productName: 'Oranges',
    productPrice: 15,
    productImage: "https://s2uqdnlqz93lrjbq205ld0eu-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/LilSnappers_Cara.png"
  },
  {
    productName: 'Bananas',
    productPrice: 10,
    productImage: "https://cdn1.medicalnewstoday.com/content/images/headlines/271/271157/bananas.jpg"
  },
  {
    productName: 'Berries',
    productPrice: 20
  },
  {
    productName: 'Apples',
    productPrice: 20
  },
]


class ProductContainer extends React.Component {
  render(){
    return(
      <div className="products">
            {
              products.map(function(eachProduct){
                  return <Product productName={eachProduct.productName} productPrice={eachProduct.productPrice} productImage={eachProduct.productImage}/>
              })
            }
      </div>
    )
  }
}

export default ProductContainer
