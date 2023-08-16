import { AccionRedirectUrl } from "../AccionRedirectUrl/AccionRedirectUrl.type";
import { AccionSp } from "../AccionSp/AccionSp.type";

export interface Accion {
    id: number;
    atributosAccion : (AccionSp | AccionRedirectUrl);
}