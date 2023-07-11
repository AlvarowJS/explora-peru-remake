import { circuitoList } from '../interfaces';
import circuitoBD from '@/api/circuitoBD';


export const getCircuitoInfo = async (id: string) => {

    try {

        const { data } = await circuitoBD.get<circuitoList>(`/${id}`);

        return {
            id: data.id,
            titulo: data.titulo,
            incluye_spanish: data.incluye_spanish,
            incluye_english: data.incluye_english,
            no_incluye_english: data.no_incluye_english,
            no_incluye_spanish: data.no_incluye_spanish,
            archivo_spanish: data.archivo_spanish,
            archivo_english: data.archivo_english,
            dias: data.duracion,
            img: data.img
        }

    } catch (error) {
        return null;
    }



}