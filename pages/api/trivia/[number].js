import superagent from "superagent";

export default function handler(req, res) {
  const number = Number(req.query.number);

  if (isNaN(number) || typeof number !== "number") {
    res.status(400).send("Invalid request!!");
  }
  superagent.get(`http://numbersapi.com/${number}`).then((response) => {
    res.status(200).send(response.text);
  });
}