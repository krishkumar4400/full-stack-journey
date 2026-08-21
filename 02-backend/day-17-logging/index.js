import express from 'express';
import logger from "./logger.js";
import morgan from "morgan";

const morganFormat = ":method :url :status :response-time ms";

logger.info("This is an info message");
logger.error("This is an error message");
logger.warn("This is a warning message");
logger.debug("This is a debug message");

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  }),
);


const app = express();

const NOTES = [];

app.get('/', (req,res) => {
  res.send("Hello Express");
});

app.post('/notes', (req,res) => {
  const {title, content} = req.body;
  const randomId = 1;
  const note = { title, content, id: randomId++ };
  NOTES.push(note);
  return res.status(201).json({
    message: "Note created",
    success: true,
    note
  });
});
app.get('/notes', (req,res) => {
  return res.status(200).json({
    success: true,
    NOTES
  });
});
app.post('/notes/:id', (req,res) => {
  const {id} = req.params;
  const note = NOTES.find((note) => note.id === parseInt(id));

  return res.status(200).json({
    success: true,
    note
  });
});

app.patch("/notes/:id", (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const note = NOTES.find((n) => n.id === parseInt(id));
  note.title = title;
  note.content = content;

  return res.status(201).json({
    success: true,
    note,
  });
});

app.listen(8000, () => {
  console.log("Server is up and running on port 8000"); 
});