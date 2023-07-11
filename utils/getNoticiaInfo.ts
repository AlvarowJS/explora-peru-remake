import { NoticiasList } from '../interfaces';
import noticiasBD from '@/api/noticiasBD';


export const getNoticiaInfo = async( id: string ) => {
  
    try {

        const { data } = await noticiasBD.get<NoticiasList>(`/${ id }`);

        return {
            id: data.id,
            titulo: data.titulo,
            nota: data.nota,
            nota_ingles: data.nota_ingles,            
            img: data.img
        }
        
    } catch (error) {
        return null;
    }



}