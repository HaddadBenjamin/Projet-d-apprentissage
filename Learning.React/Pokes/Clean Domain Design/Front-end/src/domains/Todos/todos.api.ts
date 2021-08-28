import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { ITodo } from './todos.model'
import {httpConfiguration, routes} from "./todos.constants";

export const getAllTodos = async () : Promise<AxiosResponse<ITodo[]>> =>
    (await axios.get(routes.api, httpConfiguration.default)).data

export const addTodo = async (todo : ITodo) : Promise<AxiosResponse<ITodo>> =>
    (await axios.post(routes.api, todo, httpConfiguration.default)).data

export const patchTitle = async (id : string, title : string) : Promise<AxiosResponse<ITodo>> => 
    (await axios.patch(`${routes.api}/${id}`, { title : title }, httpConfiguration.default)).data

export const patchCompleted = async (id : string, completed : boolean) : Promise<AxiosResponse<ITodo>> => 
    (await axios.patch(`${routes.api}/${id}`, { completed : completed }, httpConfiguration.default)).data

export const removeTodo = async (id : string) : Promise<AxiosResponse<ITodo>> =>
    (await axios.delete(`${routes.api}/${id}`, httpConfiguration.default)).data