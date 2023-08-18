import { AccionRedirectUrl } from "../AccionRedirectUrl/AccionRedirectUrl.type";
import { AccionSpFormulario } from "../AccionSpFormulario/AccionSpFormulario.type";

export interface Accion {
    id: number;
    atributosAccion : (AccionSpFormulario | AccionRedirectUrl);
    orden: number;
}