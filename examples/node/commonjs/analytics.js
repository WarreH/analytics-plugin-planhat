const planhatPlugin = require("../../../plugin/dist/node/index");
const { Analytics } = require("analytics");

const analytics = Analytics({
    app: "veu-demo-project",
    plugins: [
        planhatPlugin({
            tenantUUID: "REDACTED",
        }),
    ],
});

module.exports = analytics;
