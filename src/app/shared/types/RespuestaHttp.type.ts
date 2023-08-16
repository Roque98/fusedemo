/*
public class RespuestaHttp {
    public RespuestaHttp(object data)
    {
        this.error = false;
        this.mensaje = "";
        this.data = data;
    }

    public RespuestaHttp(System.Exception exception)
    {
        this.error = true;
        this.mensaje = exception.Message;
        this.data = null;
    }

    public bool error { get; set; }
    public string mensaje { get; set; }
    public object data { get; set; }
    
}

*/

export interface RespuestaHttp {
    error: boolean;
    mensaje: string;
    data: any;
}