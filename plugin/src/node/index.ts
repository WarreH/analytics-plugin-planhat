import { Https } from "./https";
import { UserStore } from "./userStore"

function planhatPlugin(pluginConfig:any) {
  return {
    name: "planhat",
    config: {
      tenantUUID: pluginConfig.tenantUUID,
    },
     identify: ({ payload }:IIdentifyProps) => {
        const { userId, traits } = payload;
        UserStore.setUser(userId, traits);
    },
    track: ({ payload, config }:ITrackProps) => {
        const { event, userId, properties } = payload;
        const user = UserStore.getUser(userId);
        const https = new Https("analytics.planhat.com");
        const body = {
            email: user.email,
            action: event,
            externalId: userId,
            companyExternalId: user.companyExternalId,
            weight: properties.weight,
            info: {
                ...properties
            },
            firstName: user.firstName,
            lastName:user.lastName
        };
        https.post("analytics/"+config.tenantUUID, body).catch((e)=>console.log(e));
    },
    loaded: () => {
        return true;
    }
  }
}

module.exports = planhatPlugin;