export default class Cl_mBodeguero {
    constructor() {

        this.acumTotal10;
        this.acumTotal20;
        this.acumTotal50;
    }
    procesarInicial({billete10, billete20, billete50}) {

        this.acumTotal10 = billete10;
        this.acumTotal20 = billete20;
        this.acumTotal50 = billete50;
        
    }
    procesarCliente(c){
        if (c.denobillete == 10)
            this.acumTotal10 += c.cantbillete;
        else if (c.denobillete == 20)
            this.acumTotal20 += c.cantbillete;
        else if (c.denobillete == 50)
            this.acumTotal50 += c.cantbillete;
    }

    monto10(){
        return this.acumTotal10 * 10;
    }

    monto20(){
        return this.acumTotal20 * 20;
    }

    monto50(){  
        return this.acumTotal50 * 50;
    }

    totalBodeguero(){
        return (this.monto10() + this.monto20() + this.monto50());
    }


}