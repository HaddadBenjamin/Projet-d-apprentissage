import {AxiosRequestConfig} from "axios";

export const routes =
{
    api : 'http://localhost:3001/todos'
}

export const httpConfiguration =
{
    default : { headers : { 'Content-Type' : 'application/json' } } as AxiosRequestConfig
}