import Analytics from "analytics";
import planhatPlugin from "../../../../plugin/dist/browser/index"

const analytics = Analytics({
    app: "veu-demo-project",
    plugins: [
        planhatPlugin({
            tenantUUID: "REDACTED",
        }),
    ],
});

export default analytics;
