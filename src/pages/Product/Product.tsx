import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

function Products() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProductCard
        name="Nike Air Zoom Pegasus 39"
        link="product-link"
        productViews={1389}
        totalClicks={1269}
        networkClicks={839}
        clicksRatio={97}
      />
      <ProductCard
        name="Nike React Pegasus Trail 4"
        link="product-link"
        productViews={875}
        totalClicks={750}
        networkClicks={500}
        clicksRatio={90}
      />
      <ProductCard
        name="Adidas Ultraboost 22"
        link="product-link"
        productViews={1100}
        totalClicks={950}
        networkClicks={700}
        clicksRatio={86}
      />
      <ProductCard
        name="Puma RS-X³ Puzzle"
        link="product-link"
        productViews={950}
        totalClicks={800}
        networkClicks={600}
        clicksRatio={84}
      />
    </div>
  );
}

export default Products;