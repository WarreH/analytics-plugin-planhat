import { script as planhatScript } from "./script";
declare global {
  interface Window {
    plantrack: IPlantrack
  }
}

interface ITrackProps{
    payload:TrackPayload
}

interface IIdentifyProps{
    payload:IdentifyPayload
}

interface IInitializeProps{
    config:Config
}

type Config = {
    tenantUUID:string;
}

type IdentifyPayload = {
  userId: string
  traits: object
}

type TrackPayload = {
  event: string
  properties: object
}

interface IPlantrack{
    track(event:string,properties:object):void;
    identify(userId:string,properties:object):void;
}

export default function planhatPlugin(pluginConfig:Config) {
  return {
    name: 'planhat',
    config: {
      tenantUUID: pluginConfig.tenantUUID,
    },
    initialize: ({ config }:IInitializeProps) => {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.text = planhatScript(config.tenantUUID)
      document.body.appendChild(script)
    },
    track: ({ payload }:ITrackProps) => {
        const { event, properties } = payload;
        window.plantrack.track(event, properties)
    },
    identify: ({ payload }:IIdentifyProps) => {
        const { userId, traits } = payload;
        window.plantrack.identify(userId, traits);
    },
    loaded: () => {
      return Boolean(window.plantrack);
    }
  }
}