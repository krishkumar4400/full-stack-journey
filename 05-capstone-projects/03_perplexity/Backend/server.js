import 'dotenv/config';
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";



await connectToDB();

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); 
});
