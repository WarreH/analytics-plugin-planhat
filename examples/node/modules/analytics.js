import planhatPlugin from "analytics-plugin-planhat";
import { Analytics } from "analytics";

const analytics = Analytics({
    app: "veu-demo-project",
    plugins: [
        planhatPlugin({
            tenantUUID: "[replace with your tenantUUID]",
        }),
    ],
});

export default analytics;
