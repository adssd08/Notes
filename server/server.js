const express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv");
const connectDB = require("./db/connectDB");
const notesRoutes = require("./routes/notes");

env.config();

app.use(express.json());
app.use(cors());
app.use("/api/v1", notesRoutes);

const port = process.env.PORT || 3001;

connectDB(process.env.MONGO_URI).then(() => {
	console.log("DataBase Connected");
	app.listen(port, () => {
		console.log(`Server is listening to ${port}`);
	});
});
