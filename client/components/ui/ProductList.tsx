// components/ProductList.js

import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Ceat Hitman Rohit Sharma Edition English Willow",
      description:
        "Ceat Hitman Rohit Sharma Edition English Willow Cricket Bat is selected grade 1+ world's finest english willow hard pressed and traditionally shaped for superb strokes.",
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/12/07/2559113-rohit-sharma-of-india-bats-during-the-victoria-bitter.jpg",
    },
    {
      id: 2,
      name: "SG Players Edition English Willow",
      description:
        "SG Players Edition English Willow Cricket Bat is an out-of-the-box design and precisely balanced shape English willow bat that provides the greatest possible quality and performance. Hardik Pandya, a T20 all-rounder, uses it",
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/12/07/2559112-gs-e1609232391353.jpg",
    },
    {
      id: 3,
      name: "MRF Custom bat",
      description:
        "MRF manufactures this bat using a unique technology that has the most recent size of the bat but is made in a traditional form. Shikhar Dhawan and Virat Kohli, India's two major star batters use it",
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/12/07/2559114-ezgif.com-gif-maker-21.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
