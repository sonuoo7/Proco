import { useEffect, useState } from "react";
import GhostContentAPI from "@tryghost/content-api";
import {
  Card,
  Image,
  Button,
  Row,
  Col,
  Container,
  Spinner,
} from "react-bootstrap";
import "./Blog.css";

const api = new GhostContentAPI({
  url: "https://proco.ghost.io",
  key: "f58caf6093bc0a662d9a9f5d86",
  version: "v3.0",
});

function BlogIntegration() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    api.posts
      .browse({
        limit: 5,
        include: "authors,tags",
      })
      .then((posts) => {
        setPosts(posts);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const handleSeeMore = (post) => {
    setSelectedPost(post);
  };

  const handleHideContent = () => {
    setSelectedPost(null);
  };

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container>
      <h2 className="blog-heading">Our Blog</h2>
      <div>
        {posts.map((post) => (
          <Card key={post.id}>
            <Card.Body>
              <Row>
                <Col md={8}>
                  <Card.Title className="blog-heading">{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {new Date(post.published_at).toLocaleDateString()} by{" "}
                    {post.primary_author.name}
                  </Card.Subtitle>
                  {selectedPost === post ? (
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${post.html.substring(0, 200)}...`,
                      }}
                    />
                  )}
                  {selectedPost === post ? (
                    <Button variant="primary" onClick={handleHideContent}>
                      Hide Content
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => handleSeeMore(post)}
                      className="btn-primary"
                    >
                      See More
                    </Button>
                  )}
                </Col>
                {post.feature_image && (
                  <Col md={4}>
                    <Image
                      src={post.feature_image}
                      alt={post.title}
                      fluid
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Col>
                )}
              </Row>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default BlogIntegration;
