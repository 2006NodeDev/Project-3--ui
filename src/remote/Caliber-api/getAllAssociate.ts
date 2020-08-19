<<<<<<< HEAD
import {caliberBaseClient} from '../index'

export const getAllAssociates = async () => {
    try{
        let res = await caliberBaseClient.get(`/mock/training/associate`)
=======

import { caliberBaseClient } from "..";

export const getAllAssociates = async () => {
    try{
        let res = await caliberBaseClient.get(`/associates/`)
>>>>>>> f952d3f65bc495ccc232c77be1eba453b7c0d6f7
        return res.data
    }catch(e){
        console.log(e);
    }
}