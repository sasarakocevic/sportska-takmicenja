import { Takmicenje } from "./takmicenje.model";
import { Tim } from "./tim.model";

export class Utakmica {
    public id?: number;
    public tim1!: Tim;
    public tim2!: Tim;
    public tim1_rezultat?: number;
    public tim2_rezultat?: number;
    public datum?: Date;
    public takmicenje!: Takmicenje;
}