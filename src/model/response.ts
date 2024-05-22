

export enum Classification {
    Equilatero = "equilátero",
    Isosceles = "isoceles",
    Escaleno = "escaleno"
}

export interface ResponseClassification {
    classification: Classification
    angles : Angles
}

export interface Angles {
    cosA: number
    cosB: number
    cosC: number 
}