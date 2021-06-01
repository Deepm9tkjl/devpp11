// Create a simple Express API
const express = require("express");

// Require the Job Scrapper
const Jobs = require("./jobScript");

// Instantiate Express server
const app = express();
const port = 9000;

// Get Jobs from with the Scrapper and return a Job with jobs
app.get("/", async (req, res) => {
  const jobs = await Jobs.getJobs();
  res.json(jobs);
});

// Listen to port 9000
app.listen(port, () => {});

// PS: If you encounter problem with `Module not found` run:
// npm i puppeteer
// again