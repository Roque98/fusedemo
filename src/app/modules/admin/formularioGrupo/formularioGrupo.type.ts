import { FormularioComponentesHtmlInput } from "../FormularioComponentesHtmlInput/FormularioComponentesHtmlInput.type";

export interface FormularioGrupo {
    id: number;
    idFormulario: number;
    titulo: string;
    descripcion: string;
    order: number;
    componentes: FormularioComponentesHtmlInput[];
}