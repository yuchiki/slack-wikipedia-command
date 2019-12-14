import express, { response } from "express";

const app: express.Express = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router: express.Router = express.Router();
router.post("/", (req: express.Request, res: express.Response) => {
    console.log(req.body);
    res.send({
        response_type: "in_channel",
        text: `https://ja.wikipedia.org/wiki/${req.body.text}`,
    });
});

app.use(router);
app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
