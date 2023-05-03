const express = require("express");
const app = express();
const port = 3000;
const analytics = require("./analytics");

app.get("/", (req, res) => {
    analytics.track("NodeJS - CommonJS server request", {
        count: 1,
        weight: 1,
    });
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
