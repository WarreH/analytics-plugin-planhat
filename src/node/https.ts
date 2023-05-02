import https from "node:https";

export class Https{
    private host:string;
    constructor(host:string){
        this.host = host;
    }

    private parseData(data:object){
        return JSON.stringify(data);
    }

    public post(path:string,data:object):Promise<void>{
        return new Promise((resolve, reject)=>{
            const parsedData = this.parseData(data);
            const request = https.request(
                {
                    hostname: this.host,
                    path: `/${path}`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': parsedData.length
                    }
                },(res)=>{res.on('end', () => resolve());}).on("error", (err) => {
                    reject(err.message);
                });
            request.write(parsedData);
            request.end();
        })
    }
}

