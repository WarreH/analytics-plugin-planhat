const planhatPlugin = require("analytics-plugin-planhat");
const { Analytics } = require("analytics");

const analytics = Analytics({
    app: "veu-demo-project",
    plugins: [
        planhatPlugin({
            tenantUUID: "[replace with your tenantUUID]",
        }),
    ],
});

module.exports = analytics;
