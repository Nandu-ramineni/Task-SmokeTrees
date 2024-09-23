import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './Db/Db.js';
import userRoutes from './Routes/routes.js';
import cors from 'cors';
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/users', userRoutes);
connectDB();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
