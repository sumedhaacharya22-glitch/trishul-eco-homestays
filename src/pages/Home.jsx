import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";
import Toast from "../components/ui/Toast";
import Loader from "../components/ui/Loader";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Trishul Eco-Homestays</h1>
      <p>Find beautiful stays across Uttarakhand</p>

      <h2>Input Component</h2>
      <Input placeholder="Search Homestays" />

      <br />
      <br />

      <h2>Button Component</h2>
      <Button text="Explore Homestays" />

      <br />
      <br />

      <h2>Loader Component</h2>
      <Loader />

      <br />
      <br />

      <h2>Toast Component</h2>
      <Toast message="Booking Successful!" />

      <br />
      <br />

      <h2>Modal Component</h2>
      <Modal title="Homestay Details">
        <p>Beautiful mountain view homestay in Rishikesh.</p>
      </Modal>
    </div>
  );
}

export default Home;