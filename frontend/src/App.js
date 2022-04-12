import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Book my Harvester</a>
      </header>
      <main>
        <h1>Featured Harvesters</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product">
              <a href={`/products/${product.name}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/products/${product.name}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>₹{product.price}</strong>
                </p>
                <button>Book now</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
