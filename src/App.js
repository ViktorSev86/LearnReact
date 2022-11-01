import './App.css';
import React, {useState} from 'react';
import MinMax from './MinMax.js';

function App() {
  let [products, setProducts] = useState(productsStub());

  let setCnt = (id, cnt) => {
    setProducts(products.map(pr => pr.id != id ? pr : ({...pr, cnt,})));
  }

  let Check = () => {
    products.reduce(((previousValue, currentValue) => previousValue.price + currentValue.price, 0));
  }

  return (
    <div className="Some">
      <h1>Products list</h1>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Cnt</th>
            <th>Total</th>
          </tr>
          {products.map((pr, i) => (
            <tr key={pr.id}>
              <td>{i + 1}</td>
              <td>{pr.title}</td>
              <td>{pr.price}</td>
              <td>{pr.rest}</td>
              <td>{pr.cnt}</td>    
              <td>
                <MinMax max={pr.rest} current={pr.cnt} onChange={cnt => setCnt(pr.id, cnt)}/>
              </td>    
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function productsStub() {
  return [
		{
			id: 100,
			title: 'Ipnone 200',
			price: 12000,
			rest: 10,
      cnt: 1,
		},
		{
			id: 101,
			title: 'Samsung AAZ8',
			price: 22000,
			rest: 5,
      cnt: 1,
		},
		{
			id: 103,
			title: 'Nokia 3310',
			price: 5000,
			rest: 2,
      cnt: 1,
		},
		{
			id: 105,
			title: 'Huawei ZZ',
			price: 15000,
			rest: 8,
      cnt: 1,
		}
	];
}

export default App;

/*let setCnt = (id, cnt) => {
  let newProducts = [...products];
  let productInd = products.find(pr => pr.id === id);
  let newProduct = {...products[productInd]};
  newProduct.cnt = cnt;
  newProducts[productInd] = newProduct;
  setProducts(newProducts);
}

<div>
        {products.reduce(((previousValue, currentValue) => previousValue.price + currentValue.price))}
      </div>
*/