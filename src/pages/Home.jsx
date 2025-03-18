import BackgroundImg from "../assets/images/background.jpg";
import { Link, NavLink, useLoaderData, useSearchParams } from "react-router-dom";
import { getProducts } from "../api"

export  function loader(){
    return getProducts()
}

const MyComponent = () => {
    const products = useLoaderData()
    const [searchParams , setSearchParams] = useSearchParams()
    const categoryFilter = searchParams.get("category")


    const displayProducts = categoryFilter ? 
    products.filter(product => product.category === categoryFilter) : 
    products

    console.log(products)

    const productElement = displayProducts.map((item) => {
        return (
            
            <div key={item.id} className='product-card'>
                <Link to={`${item.id}`}
                state={{
                    search: `?${searchParams.toString()}`, 
                    category: categoryFilter 
                }
                }>
                <img src={item.image} alt={item.title} width={230} height={280}/>
                <h2>{item.title}</h2>
                <p>${item.price}</p>
                </Link>
            </div>
            
        )
      })

      function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

  return (
    <>
    <div className="home-container">
      <img src={BackgroundImg} alt="Shop Banner" />
      <div className="home-content">
        <h1>Discover Fashion, Tech & Elegance</h1>
        <p>
          Upgrade your style with trendy clothing, cutting-edge electronics, and
          timeless jewelry – all in one place.
        </p>
        <button><NavLink to="discover">Discover More</NavLink></button>
      </div>
    </div>
    <h1 className="home-title">All Products</h1>
    <nav className="homebar">
        <div className="home-links">
        <button 
        onClick={() =>handleFilterChange("category", null)}
        className={
            `category-type 
            ${categoryFilter === null ? "selected" : ""}`
        }
        >
            All
        </button>
        <button to="menProducts"
        onClick={() =>handleFilterChange("category", "men's clothing")}
        className={
            `category-type 
            ${categoryFilter === "men's clothing" ? "selected" : ""}`
        }
        >
            Men
        </button>
        <button to="womenProducts"
        onClick={() =>handleFilterChange("category", "women's clothing")}
        className={
            `category-type 
            ${categoryFilter === "women's clothing" ? "selected" : ""}`
        }
        >
            Women
        </button>
        <button to="jewelleryProducts"
        onClick={() =>handleFilterChange("category", "jewelery")}
        className={
            `category-type
            ${categoryFilter === "jewelery" ? "selected" : ""}`
        }
        >
            Jewellery
        </button>
        <button to="electronicProducts"
        onClick={() =>handleFilterChange("category", "electronics")}
        className={
            `category-type
            ${categoryFilter === "electronics" ? "selected" : ""}`
        }
        >
            Electronic
        </button>
        </div>
    </nav>
    <div className='products-container'>
        {productElement}
    </div>
    </>
  );
};

export default MyComponent;
