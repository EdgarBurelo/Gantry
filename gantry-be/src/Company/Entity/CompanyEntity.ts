import { Entity } from "fakebase";

export interface Company extends Entity {
    id: string,
    name: string;
    description: string;
    logo: string;
    specialty: string;
    city: string;
}