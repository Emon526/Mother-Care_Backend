const express = require('express');
const app = express();
require('dotenv').config();
const { exec } = require('child_process');

const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');
const Article = require('./models/Article');

// Use express built-in body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mongoDbPath = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGODBPASS}${process.env.MONGOURL}/${process.env.MONGODB}`;

mongoose.connect(mongoDbPath,)
    .then(() => {
        console.log("Connected to MongoDB");

        // Define routes
        app.get("/", (req, res) => {
            const response = {
                statusCode: res.statusCode,
                message: "API Working",
            };
            console.log(res.statusCode, res.message);
            res.json(response);
        });

        const doctorRouter = require('./routes/Doctor');
        app.use("/doctors", doctorRouter);

        const breastCancerRouter = require('./routes/BreastCancer');
        app.use("/breastcancer", breastCancerRouter);

        // Handle 404 errors
        app.use((req, res, next) => {
            const error = new Error('Page Not Found');
            error.status = 404;
            next(error);
        });

        // Error handling middleware
        app.use((error, req, res, next) => {
            console.log(error.status, error.message);
            res.status(error.status || 500);
            res.json({
                statusCode: error.status,
                message: error.message,
            });
        });

        // Function to check if the port is in use
        function checkPortAndStartServer(port, host) {
            exec(`lsof -iTCP:${port} -sTCP:LISTEN`, (err, stdout, stderr) => {
                
                if (stdout) {
                    // Port is in use, kill the process
                    const pid = stdout.split('\n')[1].split(/\s+/)[1];
                    exec(`kill -9 ${pid}`, (killErr) => {
                        if (killErr) {
                            console.error(`Failed to kill process on port ${port}:`, killErr);
                        } else {
                            console.log(`Process on port ${port} killed`);
                            setTimeout(() => {
                                startServer(port, host);
                            }, 5000); // Add 5-second delay
                        }
                    });
                } else {
                    // Port is not in use, start the server
                    startServer(port, host);
                }
            });
        }

        // Function to start the server
        function startServer(port, host) {
            app.listen(port, host, () => {
                console.log(`Server started at http://${host}:${port}`);
            });
        }

        // Start the server with port check
        const PORT = process.env.PORT || 9000;
        const HOST = process.env.HOST || "127.0.0.1";
        checkPortAndStartServer(PORT, HOST);

    }).catch(err => {
        console.error("MongoDB connection error:", err);
    });
