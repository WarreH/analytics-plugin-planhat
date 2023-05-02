
type Config = {
    tenantUUID:string;
}

interface IInitializeProps{
    config:Config
}

interface IIdentifyProps{
    payload:IdentifyPayload
}

type IdentifyPayload = {
  userId: string;
  traits: UserTraits;
}

type TrackPayload = {
  event: string;
  properties: any;
  userId:string;
}

interface UserTraits{
    email:string;
    firstName:string;
    lastName:string;
    companyExternalId:string;
}