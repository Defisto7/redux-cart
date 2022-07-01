import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { 
    id: 'P1', 
    price: 6, 
    title: 'My first book', 
    description: 'The first book I ever wrote'
  },
  { 
    id: 'P2', 
    price: 8, 
    title: 'My second book', 
    description: 'The second book I ever wrote'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
           <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
         />
        ))}
       
      </ul>
    </section>
  );
};

export default Products;
