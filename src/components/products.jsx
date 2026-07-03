import React, { useState } from "react";
import crayfish1 from "../assets/products/Crayfish 1.jpg";
import crayfish2 from "../assets/products/Crayfish 2.jpg";
import pellets1 from "../assets/products/Pellets 1.jpg";
import pellets2 from "../assets/products/Pellets 2.jpg";
import starter1 from "../assets/products/Starter Package 1.jpg";
import starter2 from "../assets/products/Starter Package 2.jpg";
import trapal1 from "../assets/products/Trapal Pond 1.jpg";
import trapal2 from "../assets/products/Trapal Pond 2.jpg";
import trapal3 from "../assets/products/Trapal Pond 3.jpg";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Crayfish Food Consumption",
      description: "Premium quality live crayfish, carefully selected and farm-raised for the best taste and nutritional value.",
      images: [crayfish1, crayfish2],
      price: "₱2,500.00/kg"
    },
    {
      id: 2,
      name: "Crayfish Pellets",
      description: "Specially formulated feed pellets to promote healthy growth and development of crayfish in your farm.",
      images: [pellets1, pellets2],
      price: "₱300.00/bag"
    },
    {
      id: 3,
      name: "Starter Package",
      description: "Complete starter kit for beginners, including juvenile crayfish and essential farm supplies to get you started.",
      images: [starter1, starter2],
      price: "₱2,000.00 - ₱4,000.00/package"
    },
    {
      id: 4,
      name: "Trapal Pond Set Up",
      description: "Durable tarpaulin pond system designed for efficient crayfish farming. Easy to install and maintain.",
      images: [trapal1, trapal2, trapal3],
      price: "customizable pricing based on size and inclusions"
    }
  ];

  return (
    <section className="products" id="products">
      <h2>Our Products</h2>
      <p>High-quality crayfish and farming products to support your aquaculture journey</p>
      
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.images[0]} alt={product.name} className="product-image" />
              <div className="product-overlay">
                <button 
                  className="view-btn"
                  onClick={() => setSelectedProduct(product)}
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-desc">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="product-modal" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProduct(null)}>×</button>
            <h3>{selectedProduct.name}</h3>
            <div className="modal-images">
              {selectedProduct.images.map((img, idx) => (
                <img key={idx} src={img} alt={`${selectedProduct.name} ${idx + 1}`} />
              ))}
            </div>
            <p className="modal-description">{selectedProduct.description}</p>
            <p className="modal-price">{selectedProduct.price}</p>
            <a href="#contact" className="order-btn" onClick={() => setSelectedProduct(null)}>
              Order Now
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
