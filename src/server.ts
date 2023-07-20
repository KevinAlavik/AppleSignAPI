import express, { Request, Response } from 'express';

const app = express();
const port = 5354;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello!');
});

export function startServer() {
  console.log("Starting API server...")
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}