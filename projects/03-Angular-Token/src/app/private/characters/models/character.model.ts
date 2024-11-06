export enum Status {
    ALIVE = "Alive",
    DEAD = "Dead",
    UNKNOWN = "unknown"
}
export enum Gender {
    FEMALE = "Female",
    MALE = "Male",
    GENDERLESS = "Genderless",
    UNKNOWN = "unknown"
}
interface NamedUrl {
    name: string;
    url: string;
}

export interface Location extends NamedUrl{}
export interface Origin extends NamedUrl{}

export interface Character {
    id: number;
    name: string;
    status: Status;
    species: string;
    // type: string;
    // gender:Gender;
    // origin:Origin;
    // location:Location;
    // image: string;
    // episode: string[];
    // url: string;
    // created: string;

}