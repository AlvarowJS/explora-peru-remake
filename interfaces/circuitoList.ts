export interface circuitoList {
    id:                 number;
    titulo:             string;
    incluye_spanish:    string;
    incluye_english:    string;
    no_incluye_spanish: string;
    no_incluye_english: string;
    duracion:           string;
    img:                string;
    archivo_english:    string;
    archivo_spanish:    string;
    created_at:         Date;
    updated_at:         Date;
    dias:               any[];
}
