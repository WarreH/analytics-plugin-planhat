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

    analytics.identify("user12569test", {
        firstName: "warre",
        lastName: "hofmans",
        email: "test@test.com",
        companyExternalId: "testid123456",
    });
});
