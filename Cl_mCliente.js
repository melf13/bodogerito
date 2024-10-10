
export default class Cl_mClient{
    constructor({cedula, denobillete, cantbillete}){
        this.cedula = cedula;
        this.denobillete = denobillete;
        this.cantbillete = cantbillete;    
    }

    set cedula(cedula){
        this._cedula = +cedula;
    }

    get cedula(){
        return this._cedula;
    }

    set denobillete(denobillete){
        this._denobillete = +denobillete;
    }

    get denobillete(){
        return this._denobillete;
    }

    set cantbillete(cantbillete){
        this._cantbillete = +cantbillete;
    }

    get cantbillete(){
        return this._cantbillete;
    }
    
    montocuentacliente(){
        return this.denobillete * this.cantbillete;
    }
}
