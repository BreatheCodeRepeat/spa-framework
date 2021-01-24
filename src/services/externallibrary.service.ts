import M  from 'materialize-css/dist/js/materialize.min';
import * as d3 from "d3";


export default class  ExternalLibraryService{
    
    constructor(){
    }

    getMaterializeFramework(){
        return M;
    }

    getD3Library(){
        return d3;
    }

}