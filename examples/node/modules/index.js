import express from "express";
import analytics from "./analytics";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    analytics.track("NodeJS - ES6 Modules server request", {
        count: 1,
        weight: 1,
    });
    console.log("track");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

    analytics.identify("testUser4", {
        firstName: "demo",
        lastName: "user2",
        email: "test3@test.com",
        companyExternalId: "testid123456",
    });
});
