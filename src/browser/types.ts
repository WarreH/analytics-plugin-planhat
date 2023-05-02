interface ITrackProps{
    payload:TrackPayload
}

interface IPlantrack{
    track(event:string,properties:object):void;
    identify(userId:string,properties:object):void;
}