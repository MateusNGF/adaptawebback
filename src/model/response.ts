

export enum Classification {
    Equilatero = "equilátero",
    Isosceles = "isoceles",
    Escaleno = "escaleno"
}

export interface ResponseClassification {
    type: Classification
    angles : Angles
}

export interface Angles {
    cosA: number
    cosB: number
    cosC: number 
}