const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://e-learning-website-major-project.vercel.app/",
    methods: ["POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.post("/compile", async (req, res) => {
  try {
    console.log("Received a request to compile");
    const { code, lang } = req.body;
    console.log("Received Code:", code, lang);

    const response = await axios.post(
      "https://api.jdoodle.com/v1/execute",
      {
        clientId: process?.env?.JDOODLE_ID,
        clientSecret: process?.env?.JDOODLE_SECRET,
        script: code,
        language: lang,
        versionIndex: "0",
      },
      {
        headers: {
          "X-Requested_with": "XMLHttpRequest",
          "Access-Control-Allow_origin": "*",
        },
      }
    );

    res.send({ compileOutput: response.data.output });
    console.log(response.data.output);
  } catch (error) {
    console.error("Compilation error:", error);
    res.status(500).send({ compileOutput: error });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
