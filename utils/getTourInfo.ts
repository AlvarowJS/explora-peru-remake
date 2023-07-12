import toursBD from '@/api/toursBD';
import { toursList } from '../interfaces';


export const getTourInfo = async( id: string ) => {
  
    try {

        const { data } = await toursBD.get<toursList>(`/${ id }`);

        return {
            id: data.id || null,
            titulo: data.titulo || null,
            descripcion_spanish: data.descripcion_spanish || null,
            descripcion_english: data.descripcion_english || null,
            archivo_spanish: data.archivo_spanish || null,
            archivo_english: data.archivo_english || null,
            incluye_spanish: data.incluye_spanish || null,
            incluye_english: data.incluye_english || null,
            duracion: data.duracion || null,
            img: data.img || null
        }
        
    } catch (error) {
        return null;
    }



}