import {Iinfo} from "../../../models/Iinfo";
import {InfoActionEnum, SetInfoAction} from "./types";


export const InfoActionCreators = {
    addInfo: (info: Iinfo):SetInfoAction => ({
        type: InfoActionEnum.ADD_INFO,
        payload: info
    })
}