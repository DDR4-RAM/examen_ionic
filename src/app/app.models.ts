
export const Collections = {
  AVISO: 'Aviso',
  AVISOPOST: 'AvisoPOst',
  AVISOS: 'Avisos',
};

export interface Avisos{
  aviso: string;
  fecha: string;
  id: number;
  imagen: string;
  tipoUsuario: string;
  titulo: string;
}[]



export interface Aviso{
  aviso: string;
  fecha: string;
  id: number;
  imagen: string;
  tipoUsuario: string;
  titulo: string;
}

export interface AvisoPost{
  aviso: string;
  fecha: string;
  imagen: string;
  tipoUsuario: string;
  titulo: string;
}
