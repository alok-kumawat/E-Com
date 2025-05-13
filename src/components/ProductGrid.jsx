import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Form, Pagination } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const itemsPerPage = 8;

const ProductGrid = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://dummyjson.com/products?limit=100");
        const modifiedProducts = res.data.products.map((p) => ({
          id: p.id,
          name: p.title,
          price: p.price,
          category: p.category,
          image: p.thumbnail || "https://source.unsplash.com/featured/?" + p.category,
        }));
        setProducts(modifiedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filtered = products.filter(
    (product) =>
      (filter === "All" || product.category === filter) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const paginated = sorted.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container className="my-5">
      <h4 className="fw-bold mb-4">Products you may like</h4>

      <Row className="mb-4">
        <Col md={4} className="mb-2">
          <Form.Select onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Filter by Category</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home Decoration</option>
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
        {loading
          ? Array.from({ length: itemsPerPage }).map((_, idx) => (
              <Col xs={12} sm={6} md={4} lg={3} key={idx}>
                <Card className="h-100 border-0 shadow-sm">
                  <Skeleton height={200} />
                  <Card.Body>
                    <Skeleton height={20} width="80%" />
                    <Skeleton height={20} width="50%" className="mt-2" />
                    <Skeleton height={30} width="60%" className="mt-3" />
                  </Card.Body>
                </Card>
              </Col>
            ))
          : paginated.map((product) => (
              <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Card className="h-100 border-0 shadow-sm product-card">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="fs-6">{product.name}</Card.Title>
                    <Card.Text className="text-primary fw-bold">
                      ₹{product.price}
                    </Card.Text>
                    <Button variant="primary" size="sm" onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
      </Row>

      {!loading && totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <Pagination>
            {[...Array(totalPages).keys()].map((number) => (
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
      )}

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
