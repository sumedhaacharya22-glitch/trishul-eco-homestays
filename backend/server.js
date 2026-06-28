const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Sample data
let homestays = [
  {
    id: 1,
    name: "Mountain View Homestay",
    location: "Rishikesh"
  },
  {
    id: 2,
    name: "Lake View Cottage",
    location: "Nainital"
  }
];

// 1. Home Route
app.get("/", (req, res) => {
  res.status(200).send("Backend is running!");
});

// 2. Get all homestays
app.get("/api/homestays", (req, res) => {
  try {
    res.status(200).json(homestays);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// 3. Get one homestay
app.get("/api/homestays/:id", (req, res) => {
  try {
    const home = homestays.find(
      h => h.id === Number(req.params.id)
    );

    if (!home) {
      return res.status(404).json({
        message: "Homestay not found"
      });
    }

    res.status(200).json(home);

  } catch (err) {
    res.status(500).json({
      message: "Server Error"
    });
  }
});

// 4. Add homestay
app.post("/api/homestays", (req, res) => {
  try {
    homestays.push(req.body);

    res.status(201).json({
      message: "Homestay added successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: "Server Error"
    });
  }
});

// 5. Update homestay
app.put("/api/homestays/:id", (req, res) => {
  try {
    res.status(200).json({
      message: "Homestay updated successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: "Server Error"
    });
  }
});

// 6. Delete homestay
app.delete("/api/homestays/:id", (req, res) => {
  try {
    res.status(200).json({
      message: "Homestay deleted successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: "Server Error"
    });
  }
});

// 7. Search homestays
app.get("/api/search", (req, res) => {
  try {
    const query = req.query.location;

    if (query) {
      const results = homestays.filter(home =>
        home.location.toLowerCase().includes(query.toLowerCase())
      );

      return res.status(200).json(results);
    }

    res.status(200).json(homestays);

  } catch (err) {
    res.status(500).json({
      message: "Server Error"
    });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});