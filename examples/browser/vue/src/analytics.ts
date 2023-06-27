import Analytics from "analytics";
import planhatPlugin from "analytics-plugin-planhat"

const analytics = Analytics({
    app: "veu-demo-project",
    plugins: [
        planhatPlugin({
            tenantUUID: "[replace with your tenantUUID]",
        }),
    ],
});

export default analytics;
