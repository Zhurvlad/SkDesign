import {Iinfo} from "../../../models/Iinfo";


export interface InfoState {
    info: Iinfo[]
}

export enum InfoActionEnum {
    ADD_INFO= 'ADD_INFO'
}

export interface SetInfoAction {
    type: InfoActionEnum.ADD_INFO,
    payload: Iinfo
}

export type InfoActions = SetInfoAction