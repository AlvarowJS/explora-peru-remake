import toursBD from '@/api/toursBD';
import { toursList } from '../interfaces';


export const getTourInfo = async( id: string ) => {
  
    try {

        const { data } = await toursBD.get<toursList>(`/${ id }`);

        return {
            id: data.id,
            titulo: data.titulo,
            descripcion_spanish: data.descripcion_spanish,
            descripcion_english: data.descripcion_english,
            archivo_spanish: data.archivo_spanish,
            archivo_english: data.archivo_english,
            incluye_spanish: data.incluye_spanish,
            incluye_english: data.incluye_english,
            duracion: data.duracion,
            img: data.img
        }
        
    } catch (error) {
        return null;
    }



}