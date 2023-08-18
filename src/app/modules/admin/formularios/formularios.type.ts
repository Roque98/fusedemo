import { Boton } from "../../../shared/componentes/boton/Boton.type";
import { ParametroSp } from "../AccionSpFormulario/AccionSpFormulario.type";
import { FormularioGrupo } from "../formularioGrupo/formularioGrupo.type";

export interface Formulario {
    id: number;
    titulo: string;
    subtitulo: string;
    grupos: FormularioGrupo[];
    botones: Boton[];
    botonSubmit: Boton;
}



/*
Funcion que recibe un formulario y devuelve un objeto con los valores de los inputs
*/

export function getParametrosFromFormulario(formulario: Formulario): ParametroSp[] {
    const obj: ParametroSp[] = [];
    formulario.grupos.forEach(grupo => {
        grupo.componentes.forEach(input => {
            obj.push({ nombreParametro: input.nombrePropiedad, valorParametro: input.valorInput });
        });
    });
    return obj;
}


// export interface BotonFormularioRelacion {
//     botonId: number;
//     formularioId: number;
//     botones: BotonesDto[];
// }

// export interface BotonesDto {
//     id: number;
//     texto: string;
//     icono: string;
//     acciones: Acciones[];
// }

// export interface Acciones {	
//     id: number;
//     idAccion: number;
//     idBoton: number;
//     idTablaParametro: number;
//     orden: number;
//     accionCatalogo: AccionesCatalogoDto;
// } 

// export interface AccionesCatalogoDto {
//     id: number;
//     nombre: string;
//     descripcion: string;
//     tablaParametros: string;
//     parametros: any;
// }

// export interface FormularioGrupo {
//     id: number;
//     idFormulario: number;
//     titulo: string;
//     descripcion: string;
//     order: number;
//     componentes: FormularioComponentesHtmlInput[];
// }

// export interface FormularioComponentesHtmlInput {
//     id: number;
//     tipoInput: number;
//     nombrePropiedad: string;
//     idInput: string;
//     claseInput: string;
//     valorInput: string;
//     valorDateInput: Date;
//     placeholderInput: string;
//     requeridoInput: boolean;
//     patronInput: string;
//     mensajeErrorPatrinInput: string;
//     minInput: string;
//     maxInput: string;
//     stepInput: string;
//     autofocusInput: boolean;
//     readonlyInput: boolean;
//     disabledInput: boolean;
//     sizeInput: number;
//     idGroup: number;
//     order: number;
//     textoAyuda: string;
//     etiquetaInput: string;
//     iconoNombre: string;
//     hidePassword:boolean;
// }

// export interface NombreInputValor {
//     nombreInput: string;
//     valorInput: string;
// }

// /*
// Funcion que recibe un formulario y devuelve un objeto con los valores de los inputs
// */

// export function getFormValuesGroup(formulario: Formulario, idGroup: number): NombreInputValor[] {
//     const obj: NombreInputValor[] = [];
//     formulario.grupos.forEach(grupo => {
//         if (grupo.id === idGroup) {
//             grupo.componentes.forEach(input => {
//                 obj.push({ nombreInput: input.nombrePropiedad, valorInput: input.valorInput });
//             });
//         }
//     });
//     return obj;
// }