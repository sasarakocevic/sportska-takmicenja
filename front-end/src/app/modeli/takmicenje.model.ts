import { Tim } from "./tim.model";

export class Takmicenje {
    public naziv!: string;
    public id?: number;
    public datum_od!: string;
    public datum_do!: string;
    public mjesto_odrzavanja!: string;
    public timovi?: Tim[];



}