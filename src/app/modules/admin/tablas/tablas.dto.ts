import { Boton } from "../../../shared/boton/Boton.type";



export interface ITabla {
  id: number;
  titulo: string;
  subtitulo: string;
  columnas: IColumna[];
  accionesPorRegistro: ITablaAcciones[];
  accionesPorTabla: ITablaAcciones[];
  botonesAccionesPorTabla: IBotonRelacion[];
  botonesAccionesPorColumna: IBotonRelacion[];
  datos: any[];
}

export interface IBotonRelacion {
  botonId: number;
  tablaId: number;
  boton: Boton;
}

export interface IColumna {
  id: number;
  nombreColumna: string;
  aliasColumna: string;
  idTabla: number;
}


export interface ITablaAcciones {
  id: number;
  icono: string;
  nombreAccion: string;
  urlAccion: string;
  idTabla: number;
  orden: number;
  abrirModal: boolean;
  idModal: number;
  modal: IModal;
  ejecutarSp: boolean;
  accionPorCadaRegistro: boolean;
}


export interface IModal {
  id: number;
  tituloModal: string;
  descripcionModal: string;
  textoConfirmar: string;
  textoCancelar: string;
}
