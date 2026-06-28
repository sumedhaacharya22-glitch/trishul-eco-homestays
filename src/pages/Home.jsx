import { useState, useEffect } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";
import Toast from "../components/ui/Toast";
import Loader from "../components/ui/Loader";

function Home() {
  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/homestays")
      .then((response) => response.json())
      .then((data) => {
        setHomestays(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching homestays:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Trishul Eco-Homestays</h1>
      <p>Find beautiful stays across Uttarakhand</p>

      <h2>Search</h2>
      <Input placeholder="Search Homestays" />

      <br />
      <br />

      <Button text="Explore Homestays" />

      <br />
      <br />

      <h2>Loading Component</h2>
      {loading ? <Loader /> : <p>Data Loaded Successfully!</p>}

      <br />

      <Toast message="Connected to Backend Successfully!" />

      <br />

      <Modal title="Homestay Details">
        <p>These homestays are fetched from the backend server.</p>
      </Modal>

      <hr />

      <h2>Available Homestays</h2>

      {homestays.length > 0 ? (
        homestays.map((home) => (
          <div
            key={home.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3>{home.name}</h3>
            <p>
              <strong>Location:</strong> {home.location}
            </p>
          </div>
        ))
      ) : (
        !loading && <p>No homestays found.</p>
      )}
    </div>
  );
}

export default Home;