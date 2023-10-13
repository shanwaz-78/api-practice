const connection = require("../database/connection");

const userData = async (req, res) => {
  const data = req.body;

  const query =
    "INSERT INTO userData (id, name, email, phone, website) VALUES (?, ?, ?, ?, ?)";

  if (data.length === 0) {
    return res
      .status(400)
      .json({ error: "No data received from the frontend" });
  }
  const checkDataExistence = async () => {
    return new Promise((resolve, reject) => {
      const query = "SELECT id,name,email,phone,website FROM userData";
      connection.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.length > 0);
        }
      });
    });
  };

  for (let i = 0; i < data.length; i++) {
    const { id, name, email, phone, website } = data[i];
    try {
      const dataExists = await checkDataExistence();
      if (dataExists) {
        return res
          .status(400)
          .send({ error: `data is already exists in the database` });
      }
    } catch (error) {
      console.log(error);
    }
    connection.query(
      query,
      [id, name, email, phone, website],
      (err, result) => {
        if (err) {
          console.error("Database error:", err);
          return res
            .status(500)
            .send({ error: "Error inserting data into the database" });
        }
      }
    );
  }

  res.status(200).json({ message: "Data inserted successfully" });
};

const storedData = (req, res) => {
  const query = "SELECT id,name,email,phone,website FROM userData";
  connection.query(query, (err, result) => {
    if (err || result.length === 0) {
      return res
        .status(400)
        .send({ message: `No Data Found In the provided API` });
    }
    res.status(200).json(result);
  });
};

module.exports = {
  userData,
  storedData,
};
