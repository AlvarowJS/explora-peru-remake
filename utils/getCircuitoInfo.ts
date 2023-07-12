import { circuitoList } from '../interfaces';
import circuitoBD from '@/api/circuitoBD';


export const getCircuitoInfo = async (id: string) => {

    try {

        const { data } = await circuitoBD.get<circuitoList>(`/${id}`);

        return {
            id: data.id || null,
            titulo: data.titulo || null,
            incluye_spanish: data.incluye_spanish || null,
            incluye_english: data.incluye_english || null,
            no_incluye_english: data.no_incluye_english || null,
            no_incluye_spanish: data.no_incluye_spanish || null,
            archivo_spanish: data.archivo_spanish || null,
            archivo_english: data.archivo_english || null,
            dias: data.duracion || null,
            img: data.img || null
        }

    } catch (error) {
        return null;
    }



}