const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path"); // ← YEH ADD KARO

const app = express();
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173",
  "https://ai-resume-project-t083.onrender.com", // ← hardcode kar do
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

/* require all the routes here */
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

/* using all the routes here */
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

// ↓↓↓ YEH NAYA CODE ADD KARO ↓↓↓
app.use(express.static(path.join(__dirname, "../../Frontend/dist")));

app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "../../Frontend/dist", "index.html"));
});
// ↑↑↑ BUS ITNA ↑↑↑

module.exports = app;
