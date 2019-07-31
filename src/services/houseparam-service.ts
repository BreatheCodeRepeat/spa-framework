

export default class HouseParamService{
    
    private temp : number = 25;

    private humid: number = 50;

    constructor(){
    }

    get temperature(){
        return this.temp;
    }

    set temperature(val){
        this.temp = val;
    }

    get humidity(){
        return this.humid;
    }

    set humidity(val){
        this.humid = val;
    }

}