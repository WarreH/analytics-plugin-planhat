import planhatPlugin from "../../../plugin/dist/node/index";
import { Analytics } from "analytics";

const analytics = Analytics({
    app: "veu-demo-project",
    plugins: [
        planhatPlugin({
            tenantUUID: "REDACTED",
        }),
    ],
});

export default analytics;
