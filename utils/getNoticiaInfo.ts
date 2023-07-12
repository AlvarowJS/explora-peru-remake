import { NoticiasList } from '../interfaces';
import noticiasBD from '@/api/noticiasBD';


export const getNoticiaInfo = async( id: string ) => {
  
    try {

        const { data } = await noticiasBD.get<NoticiasList>(`/${ id }`);

        return {
            id: data.id || null,
            titulo: data.titulo || null,
            nota: data.nota || null,
            nota_ingles: data.nota_ingles || null,
            img: data.img || null
        }
        
    } catch (error) {
        return null;
    }



}