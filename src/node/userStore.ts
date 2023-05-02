
export class UserStore{
    public readonly users:any = {};
    private static instance:UserStore;

    static getInstance(){
        if(!this.instance) {
            this.instance = new UserStore();
        }
        return this.instance;
    }

    static setUser(id:string, properties:UserTraits):void{
        UserStore.getInstance().users[id] = properties;
    }
    
    static getUser(id:string):UserTraits{
        return UserStore.getInstance().users[id];
    }
}