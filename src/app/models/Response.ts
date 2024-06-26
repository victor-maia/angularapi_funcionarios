export interface Response<T>{
    dados: T;
    Mensagem: string;
    sucesso: boolean;
}