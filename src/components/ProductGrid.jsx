import React, { useState, useContext } from "react";
import { Container, Row, Col, Card, Button, Form, Pagination } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const initialProducts = [
  { id: 1, name: "Wireless Headphones", price: 2999, category: "Electronics", image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdpcmVsZXNzJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 2, name: "Smartphone", price: 24999, category: "Electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "T-shirt - Cotton", price: 699, category: "Clothing", image: "https://media.istockphoto.com/id/1323480815/photo/navy-t-shirt.webp?a=1&b=1&s=612x612&w=0&k=20&c=DJ7SBfigR6sLEiekcjgaA348ce-Wy5DWEWSl4w42Q3s=" },
  { id: 4, name: "Sneakers", price: 3499, category: "Footwear", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U25lYWtlcnN8ZW58MHx8MHx8fDA%3D" },
  { id: 5, name: "Backpack", price: 1499, category: "Accessories", image: "https://media.istockphoto.com/id/1400820336/photo/opened-school-backpack-with-stationery-on-green-background-concept-back-to-school-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=oZ8MlbZSdHa0Wg7YdkeH1067asux2rnqcXv4EYcWGIg=" },
  { id: 6, name: "Digital Watch", price: 1999, category: "Accessories", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fERpZ2l0YWwlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 7, name: "Bluetooth Speaker", price: 1299, category: "Electronics", image: "https://media.istockphoto.com/id/2198615638/photo/green-led-light-glowing-in-the-bluetooth-speaker.webp?a=1&b=1&s=612x612&w=0&k=20&c=_NCncmOAjSCAMjyuZBHrqHijyH0BSbBx5o7CPWB1u0A=" },
  { id: 8, name: "Formal Shirt", price: 999, category: "Clothing", image: "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZvcm1hbCUyMFNoaXJ0fGVufDB8fDB8fHww" },
  { id: 9, name: "Casual Shoes", price: 1799, category: "Footwear", image: "https://media.istockphoto.com/id/1129855093/photo/casual-shoes.jpg?s=612x612&w=0&k=20&c=VI8WjfeLZuU1Q82xVVxJeBF6K96tc88bLu2fFbCKtrg=" },
  { id: 10, name: "Leather Belt", price: 499, category: "Accessories", image: "https://images.unsplash.com/photo-1664286074240-d7059e004dff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVhdGhlciUyMEJlbHQlMjAlRTIlODIlQjk0OTl8ZW58MHx8MHx8fDA%3D" },
  { id: 11, name: "Graphic Hoodie", price: 1299, category: "Clothing", image: "https://media.istockphoto.com/id/1293292206/photo/young-beautiful-girl-in-a-white-hoodie-posing-warm-oversized-hoodie-with-an-hood-stylish.jpg?s=612x612&w=0&k=20&c=jtOCQCQieltbA-xg3GE_MNdfNsnj4i0H1qvVD837xLk=" },
  { id: 12, name: "Laptop", price: 49999, category: "Electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80" }
];

const itemsPerPage = 8;

const ProductGrid = ({searchQuery}) => {
  const [products] = useState(initialProducts);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { addToCart } = useContext(CartContext);

  const filtered = products.filter(product =>
    (filter === "All" || product.category === filter) &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const paginated = sorted.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Container className="my-5">
      <h4 className="fw-bold mb-4">Products you may like</h4>

      <Row className="mb-4">
        <Col md={4} className="mb-2">
          <Form.Select onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Filter by Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Footwear">Footwear</option>
            <option value="Accessories">Accessories</option>
          </Form.Select>
        </Col>
        <Col md={4} className="mb-2">
          <Form.Select onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort by</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="g-4">
        {paginated.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card className="h-100 border-0 shadow-sm product-card">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fs-6">{product.name}</Card.Title>
                <Card.Text className="text-primary fw-bold">₹{product.price}</Card.Text>
                <Button variant="primary" size="sm" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          {[...Array(totalPages).keys()].map(number => (
            <Pagination.Item
              key={number + 1}
              active={number + 1 === currentPage}
              onClick={() => setCurrentPage(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>

      <style jsx>{`
        .product-card:hover {
          transform: scale(1.03);
          transition: transform 0.3s ease;
        }
      `}</style>
    </Container>
  );
};

export default ProductGrid;
