import express from "express";
export const app = express();
const PORT = 3000;

app.get("/api/list", (req, res) => {
  res.send(req.query);
});

app.post("/api/list", (req, res) => {
  res.send(req.body);
});

app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));
