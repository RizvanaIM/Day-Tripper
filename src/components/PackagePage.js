import React, { useEffect, useState } from "react";

const PackagePage = () => {
  const [packages, setPackages] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState("");

  // Fetch packages from backend
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/packages");
        if (!response.ok) {
          throw new Error("Failed to fetch packages.");
        }
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error("Error fetching packages:", error);
        setError("Failed to fetch packages.");
      }
    };

    fetchPackages();
  }, []);

  // Add package to cart
  const addToCart = async (pkg) => {
    try {
      const response = await fetch("http://localhost:8080/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1, // Replace with dynamic user ID
          package: pkg,
          quantity: 1,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart.");
      }

      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (error) {
      console.error("Error adding item to cart:", error);
      setError("Failed to add item to cart.");
    }
  };

  // Remove package from cart
  const removeFromCart = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/cart/remove/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to remove item from cart.");
      }

      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (error) {
      console.error("Error removing item from cart:", error);
      setError("Failed to remove item from cart.");
    }
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.package.price * item.quantity), 0).toFixed(2);
  };

  // Edit the quantity of an item in the cart
  const editCart = async (id, newQuantity) => {
    try {
      const response = await fetch(`http://localhost:8080/api/cart/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1, // Replace with dynamic user ID
          quantity: newQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update item quantity.");
      }

      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (error) {
      console.error("Error updating item quantity:", error);
      setError("Failed to update item quantity.");
    }
  };

  return (
    <div className="package-page">
      <h1>Available Packages</h1>
      {error && <p className="error-message">{error}</p>}
      {packages.length > 0 ? (
        <div className="package-gallery">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <h3>{pkg.packageType || "No type available"}</h3>
              <p>{pkg.description || "No description available"}</p>
              <p>Category: {pkg.category || "N/A"}</p>
              <p>Price: ${pkg.price || "N/A"}</p>
              <button onClick={() => addToCart(pkg)}>Add to Cart</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No packages available.</p>
      )}

      <h2>Cart</h2>
      {cart.length > 0 ? (
        <div className="cart">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.package.packageType}</h3>
              <p>Price: ${item.package.price}</p>
              <label>
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => editCart(item.id, Number(e.target.value))}
                />
              </label>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${calculateTotal()}</h3>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default PackagePage;
