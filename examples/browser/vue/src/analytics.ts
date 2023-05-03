import Analytics from "analytics";
import planhatPlugin from "../../../../plugin/dist/browser/index"

const analytics = Analytics({
    app: "veu-demo-project",
    plugins: [
        planhatPlugin({
            tenantUUID: "[replace with your tenantUUID]",
        }),
    ],
});

export default analytics;
