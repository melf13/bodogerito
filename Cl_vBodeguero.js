export default class Cl_vBodeguero {
    constructor(controlador){
        this.vista = document.getElementById("mainForm");
        this.table = document.getElementById("mainForm_table");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.btCancelar = document.getElementById("mainForm_btCancelar");
        this.lblMonto10 = document.getElementById("mainForm_lblMonto10");
        this.lblMonto20 = document.getElementById("mainForm_lblMonto20");
        this.lblMonto50 = document.getElementById("mainForm_lblMonto50");
        this.lbltotalBodeguero = document.getElementById("mainForm_lbltotalBodeguero");
        this.salida = document.getElementById("mainForm_salida");
        this.btAgregar.onclick = ()=> controlador.mostrarVistaCliente();
        this.btCancelar.onclick = ()=> controlador.mostrarVistaInicial() || controlador.reset();
        this.ocultar();
    }

    mostrar(){
        this.vista.hidden = false;
    }

    ocultar(){
        this.vista.hidden = true;
    }
    resetBodeguero(){
        this.table.innerHTML = `<tr>
            <th>Cédula</th>
            <th>Denominación</th>
            <th>Cantidad</th>
            <th>Monto Cuenta</th>
        </tr>`;
        this.lblMonto10.innerHTML = 0;
        this.lblMonto20.innerHTML = 0;
        this.lblMonto50.innerHTML = 0;
        this.lbltotalBodeguero.innerHTML = 0;
    }
    

    
    reportarCliente({
        cedula,
        denobillete,
        cantbillete,
        montocuentacliente,
        monto10,
        monto20,
        monto50,
        total
    }) {
        this.table.innerHTML += `<tr>
        <td>${cedula}</td>
        <td>${denobillete}</td>
        <td>${cantbillete}</td>
        <td>${montocuentacliente}</td>
        </tr>`;
        this.lblMonto10.innerHTML = monto10;
        this.lblMonto20.innerHTML = monto20;
        this.lblMonto50.innerHTML = monto50;
        this.lbltotalBodeguero.innerHTML = total;
    }
    

     
}