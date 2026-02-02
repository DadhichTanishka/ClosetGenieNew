const express = require("express");
const OpenAI = require("openai");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();
app.use(cors());
app.use(express.json());
var myHeaders = new Headers();
myHeaders.append("X-API-KEY", process.env.SERPER_KEY);
myHeaders.append("Content-Type", "application/json");
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

const test = async (userPrompt) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Tell me what should i wear with the given piece of cloth. give the ans in JSON format including an array of objects with keys named category, name, color and shade. Return only JSON array without any formating.",
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
    // response_format:{ "type": "json_object" }
  });
  //   console.log(JSON.parse(response.choices[0].message.content),"jbgv");

  return JSON.parse(response.choices[0].message.content);
};

const serper = async (items, gender) => {
  const promises = await items.map(async (element) => {
    // console.log(element)
    var raw = JSON.stringify({
      q:
        element.shade +
        " " +
        element.color +
        " " +
        element.name +
        " for " +
        gender,
      gl: "in",
    });
    var requestOPtions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const result = await fetch(
      "https://google.serper.dev/shopping",
      requestOPtions
    )
      .then((response) => response.json())
      .catch((error) => console.log(error));

    return result;
  });
  const results = Promise.all(promises);
  return results;
};

app.post("/combination", async (req, res) => {
  let items;
  console.log(req.body);
  try {
    // console.log(req.body.clothingItem)
    items = await test(req.body.clothingItem);

    const serperresult = await serper(items, req.body.gender);
    // console.log(serperresult);
    res.send(serperresult);
    //     res.send("consoled log the output")
    //    items = test("white t-shirt");
  } catch (error) {
    console.log("Error calling OpenAI API:", error);
    res.status(500).send("Error calling OpenAI API");
  }

  //   try {
  //     res.send("consoled log the serper output");
  //     serper(items);
  //   } catch (e) {
  //     console.log("Error in calling serper:", e);
  //     res.status(500).send("Error in calling serper");
  //   }
});
app.get("/", (req, res) => {
  res.send("server running-1");
});
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
