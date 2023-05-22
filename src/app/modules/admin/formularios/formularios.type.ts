/*
public class Formulario {
        public int id { get; set; }
        public string titulo { get; set; }
        public string subtitulo { get; set; }
        public string descripcion { get; set; }
        public List<FormularioGrupo> grupos { get; set; }
    }	

    public class FormularioGrupo {
        public int id { get; set; }
        public int idFormulario { get; set; }
        public string titulo { get; set; }
        public string descripcion { get; set; }
    }

     public class FormularioComponentesHtmlInput {
        public int id { get; set; }
        public int tipoInput { get; set; }
        public string nombreInput { get; set; }
        public string idInput { get; set; }
        public string claseInput { get; set; }
        public string valorInput { get; set; }
        public string placeholderInput { get; set; }
        public bool requeridoInput { get; set; }
        public string patronInput { get; set; }
        public string minInput { get; set; }
        public string maxInput { get; set; }
        public string stepInput { get; set; }
        public bool autofocusInput { get; set; }
        public bool readonlyInput { get; set; }
        public bool disabledInput { get; set; }
        public int sizeInput { get; set; }
        public bool multipleInput { get; set; }
        public int idFormulario { get; set; }
        
    }
*/
export interface Formulario {
    id: number;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    urlRegresar: string;
    grupos: FormularioGrupo[];
}

export interface FormularioGrupo {
    id: number;
    idFormulario: number;
    titulo: string;
    descripcion: string;
    order: number;
    componentes: FormularioComponentesHtmlInput[];
}

export interface FormularioComponentesHtmlInput {
    id: number;
    tipoInput: number;
    nombrePropiedad: string;
    idInput: string;
    claseInput: string;
    valorInput: string;
    placeholderInput: string;
    requeridoInput: boolean;
    patronInput: string;
    minInput: string;
    maxInput: string;
    stepInput: string;
    autofocusInput: boolean;
    readonlyInput: boolean;
    disabledInput: boolean;
    sizeInput: number;
    idGroup: number;
    order: number;
    textoAyuda: string;
    etiquetaInput: string;
    iconoNombre: string;
}

export interface NombreInputValor {
    nombreInput: string;
    valorInput: string;
}

/*
Funcion que recibe un formulario y devuelve un objeto con los valores de los inputs
*/

export function getFormValuesGroup(formulario: Formulario, idGroup: number): NombreInputValor[] {
    const obj: NombreInputValor[] = [];
    formulario.grupos.forEach(grupo => {
        if (grupo.id === idGroup) {
            grupo.componentes.forEach(input => {
                obj.push({ nombreInput: input.nombrePropiedad, valorInput: input.valorInput });
            });
        }
    });
    return obj;
}