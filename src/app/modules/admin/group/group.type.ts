export interface Group {
    objid: number;
    name: string;
    parentidGroup: number;
    order: number;
    childrens: Group[];
  }
  