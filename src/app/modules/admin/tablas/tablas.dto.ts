/*
{
  "id": 1,
  "titulo": "Empleados",
  "subtitulo": "Lista de todos los empleados",
  "spObtenerDatos": "BasesPruebaCrud..Empleado_ListarTodosLosEmpleados",
  "columnas": [
    {
      "id": 1,
      "nombreColumna": "id",
      "aliasColumna": "Numero identificado del usuario",
      "idTabla": 1
    },
    {
      "id": 2,
      "nombreColumna": "FirstName",
      "aliasColumna": "Nombres del empleado",
      "idTabla": 1
    },
    {
      "id": 3,
      "nombreColumna": "LastName",
      "aliasColumna": "Apellido del empleado",
      "idTabla": 1
    }
  ]
}
*/


export interface ITabla {
    id: number;
    titulo: string;
    subtitulo: string;
    columnas: IColumna[];
    acciones: ITablaAccion[];
    datos: any[];
}

export interface IColumna {
    id: number;
    nombreColumna: string;
    aliasColumna: string;
    idTabla: number;
}


export interface ITablaAccion {
    id: number;
    icono: string;
    nombreAccion: string;
    urlAccion: string;
    idTabla: number;
}
