import { Info } from "./api.model";

enum Gender {
    "MALE" = "Male",
    "FEMALE" = "Female",
    "GENDERLESS" = "Genderless",
    "UNKNOWN" = "Unknown"
}

export interface CharacterInfo {
    info : Info,
    results : Character[]
}

export interface LinkedElement {
    name: string;
    url:  string;
}

export interface Origin extends LinkedElement{}
export interface Location extends LinkedElement{}

export interface Character {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   Gender;
    origin:   Origin;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
}

export const emptyCharacter : Character = {
    id:0,
    name: '',
    status: '',
    species: '',
    type:     '',
    gender:   Gender.MALE,
    origin:   {
        name: '',
        url: ''
    },
    location: {
        name: '',
        url: ''
    },
    image:    '',
    episode:  [],
    url:      '',
    created:  ''
}


