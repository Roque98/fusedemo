
/*
-- Creación de la tabla TipoSensor
CREATE TABLE TipoSensor (
  tipo_sensor_id INT PRIMARY KEY,
  tipo_sensor_nombre VARCHAR(50)
);

-- Creación de la tabla Sensor
CREATE TABLE Sensor (
  sensor_id INT PRIMARY KEY,
  sensor_nombre VARCHAR(50),
  tipo_sensor_id INT,
  dispositivo_id INT,
  FOREIGN KEY (tipo_sensor_id) REFERENCES TipoSensor(tipo_sensor_id),
  FOREIGN KEY (dispositivo_id) REFERENCES Dispositivo(dispositivo_id)
);

-- Creación de la tabla Medicion
CREATE TABLE Medicion (
  medicion_id INT PRIMARY KEY,
  sensor_id INT,
  fecha_hora DATETIME,
  valor FLOAT,
  unidad VARCHAR(10),
  FOREIGN KEY (sensor_id) REFERENCES Sensor(sensor_id)
);

-- Creación de la tabla Alerta
CREATE TABLE Alerta (
  alerta_id INT PRIMARY KEY,
  medicion_id INT,
  nivel VARCHAR(20),
  mensaje VARCHAR(100),
  fecha_hora DATETIME,
  FOREIGN KEY (medicion_id) REFERENCES Medicion(medicion_id)
);

*/


export interface Group {
  objid: number;
  name: string;
  parentidGroup: number;
  order: number;
  childrens: Group[];
  devices: Device[];
}

export interface Device {
  objid: number;
  device: string;
  host: string;
  order: number;
  groupidGroup: number;
  sensors: Sensor[];
}

export interface TipoSensor {
  tipo_sensor_id: number;
  tipo_sensor_nombre: string;
}

export interface Sensor {
  sensor_id: number;
  sensor_nombre: string;
  tipo_sensor_id: number;
  dispositivo_id: number;
  mediciones: Medicion[];
  alertas: Alerta[];
}

export interface Medicion {
  unidad: string;
  medicion_id: number;
  sensor_id: number;
  fecha_hora: Date;
  valor: number;
  
}

export interface Alerta {
  alerta_id: number;
  medicion_id: number;
  nivel: string;
  mensaje: string;
  fecha_hora: Date;
}

export const exampleDataTipoSensor: TipoSensor[] = [
  {
    tipo_sensor_id: 1,
    tipo_sensor_nombre: 'CPU',
  },
  { 
    tipo_sensor_id: 2,
    tipo_sensor_nombre: 'RAM',
  },
  {
    tipo_sensor_id: 3,
    tipo_sensor_nombre: 'Disco',
  },
  {
    tipo_sensor_id: 4,
    tipo_sensor_nombre: 'Red',
  }
];

export const exampleDataSensor: Sensor[] = [
  {
    sensor_id: 1,
    sensor_nombre: 'CPU 1',
    tipo_sensor_id: 1,
    dispositivo_id: 1,
    alertas: [
      {
        alerta_id: 1,
        medicion_id: 1,
        nivel: 'warning',
        mensaje: 'El valor de la medicion es mayor a 80',
        fecha_hora: new Date()
      },
      {
        alerta_id: 2,
        medicion_id: 1,
        nivel: 'danger',
        mensaje: 'El valor de la medicion es mayor a 90',
        fecha_hora: new Date()
      }
    ],
    mediciones: [
      {
        unidad: '%',
        medicion_id: 1,
        sensor_id: 1,
        fecha_hora: new Date(),
        valor: 80
      },
      {
        unidad: '%',
        medicion_id: 2,
        sensor_id: 1,
        // Minus 1 minute
        fecha_hora: new Date(new Date().getTime() - 60000),
        valor: 90
      },
      {
        unidad: '%',
        medicion_id: 3,
        sensor_id: 1,
        // Minus 2 minutes
        fecha_hora: new Date(new Date().getTime() - 120000),
        valor: 100
      }
    ]
  },
  {
    sensor_id: 2,
    sensor_nombre: 'CPU 2',
    tipo_sensor_id: 1,
    dispositivo_id: 1,
    alertas: [],
    mediciones: [
      {
        unidad: '%',
        medicion_id: 4,
        sensor_id: 2,
        fecha_hora: new Date(),
        valor: 80
      },
      {
        unidad: '%',
        medicion_id: 5,
        sensor_id: 2,
        // Minus 1 minute
        fecha_hora: new Date(new Date().getTime() - 60000),
        valor: 90
      }
    ]
  },
  // {
  //   sensor_id: 3,
  //   sensor_nombre: 'RAM 1',
  //   tipo_sensor_id: 2,
  //   dispositivo_id: 1,
  // },
  // {
  //   sensor_id: 4,
  //   sensor_nombre: 'RAM 2',
  //   tipo_sensor_id: 2,
  //   dispositivo_id: 1,
  // },
  // {
  //   sensor_id: 5,
  //   sensor_nombre: 'Disco 1',
  //   tipo_sensor_id: 3,
  //   dispositivo_id: 1,
  // },
  // {
  //   sensor_id: 6,
  //   sensor_nombre: 'Disco 2',
  //   tipo_sensor_id: 3,
  //   dispositivo_id: 1,
  // }
];

    

export const exampleData: Group[] = [
  {
    objid: 1,
    name: 'Grupo 1',
    parentidGroup: null,
    order: 1,
    childrens: [
      {
        objid: 2,
        name: 'Grupo 1.1',
        parentidGroup: 1,
        order: 1,
        childrens: [
          {
            objid: 3,
            name: 'Grupo 1.1.1',
            parentidGroup: 2,
            order: 1,
            childrens: [],
            devices: [
              {
                objid: 1,
                device: 'Device 1.1.1',
                host: '0.0.0.0',
                order: 1,
                groupidGroup: 3,
                sensors: [exampleDataSensor[0]]
              },
              {
                objid: 2,
                device: 'Device 1.1.2',
                host: '0.0.0.0',
                order: 2,
                groupidGroup: 3,
                sensors: [exampleDataSensor[1]]
              }
            ]
          },
          {
            objid: 4,
            name: 'Grupo 1.1.2',
            parentidGroup: 2,
            order: 2,
            childrens: [],
            devices: [
              {
                objid: 3,
                device: 'Device 1.1.1',
                host: '0.0.0.0.0',
                order: 1,
                groupidGroup: 4,
                sensors: []
              }
            ]
          }
        ],
        devices: []
      },
      {
        objid: 5,
        name: 'Grupo 1.2',
        parentidGroup: 1,
        order: 2,
        childrens: [
          {
            objid: 6,
            name: 'Grupo 1.2.1',
            parentidGroup: 5,
            order: 1,
            childrens: [],
            devices: []
          },
          {
            objid: 7,
            name: 'Grupo 1.2.2',
            parentidGroup: 5,
            order: 2,
            childrens: [],
            devices: []
          }
        ],
        devices: []
      }
    ],
    devices: []
  }
];
