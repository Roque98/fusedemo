import { Accion } from "../../../modules/admin/Accion/Accion.type";

export interface Boton {
    texto: string;
    icono: string;
    acciones: Accion[];
}

export enum TipoBoton {
    BotonHeader = "Boton header",
    BotonSubmit = "Boton submit",
}