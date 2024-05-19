import exp from "node:constants";
import {number} from "joi";

export interface IPostResponseModel {
    id: number;
    title: string;
    body: string;
    userId: number;
}