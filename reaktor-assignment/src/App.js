import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

//made two modules, productService for the axios and Banners just to tidy the app.js
import getProducts from './services/products'
import {Menu, Footer} from './components/Banners'


function App() {

  //useStates to define current category and products, decided not to use a default category
  const [products, setProducts] = useState(false)
  const [category, setCategory] = useState('')

  //just a simple table structure displaying parameters, please note I did not have time
  //to make the availability work without experiencing huge delays. Might revisit
  const ProductParameters = ({product}) => {
    return (
    <tbody><tr>
      <td> {product.id}</td><td>{product.name}</td>
      <td>{product.color.map((color, i) => <p key={i}> {color}</p>)}</td>
      <td>{product.price}</td><td>{product.manufacturer}</td>
      <td>{'NaN'}</td>
    </tr></tbody>
    )
  }

  //Defines the product page
  const Product = ({products,category}) => {
    useEffect(() => {
      setCategory(category)
    }, [category])

    if (products) {
      return (
        <div>
          <h2>{category}</h2>
          <table >
            <thead><tr><th>id</th><th>name</th><th>color(s)</th><th>price</th><th>manufacturer</th><th>availability</th></tr></thead>
            {products.map(product => <ProductParameters key={product.id} product = {product}/>)}
          </table>
        </div>
      )}
      //has an else case if no data has been loaded yet
      else {return <div>Retrieving product data, please wait</div>}
  }
  
  //use effect that loads the page for the first time. The categories are needed
  //since there is no default category. Can be easily changed.
  useEffect(() => {
    const categories = ['gloves','facemasks','beanies']
    if (categories.includes(category)) {
      getProducts(category).then(products => {
        setProducts(products)
    })
  }
  }, [category])

  //simple Switch/Route system
  return (
    <div>
      <div>
        <h1>Reaktor assignment</h1>
        <Menu/>
      </div>
      <Switch>
        <Route path = '/products/gloves'>
          <Product products = {products} category = {'gloves'}/>
        </Route>
        <Route path = '/products/facemasks'>
          <Product products = {products} category = {'facemasks'}/>
        </Route>
        <Route path = '/products/beanies'>
          <Product products = {products} category = {'beanies'}/>
        </Route>
        <Route path='/'>
          <h2>Choose from the menu which products you would like to view</h2>
        </Route>
      </Switch>
      <div><Footer/></div>
    </div>
  )
}

export default App;
