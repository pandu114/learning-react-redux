export interface IlistState {
    loading:false,
    data: any[] | null,
    error:string | null
}
export const initialList:IlistState = {
    loading:false,
    data:null,
    error:null
}