import { Injectable } from '@nestjs/common';
import { Angles, Classification, ResponseClassification } from './model/response';

@Injectable()
export class AppService {
  processTriangle(sideA: number, sideB: number, sideC: number): ResponseClassification {

    const data : ResponseClassification = {
      classification: this.classifyTriangle(sideA, sideB, sideC),
      angles: null
    }

    if (data.classification) {
      data.angles = this.calculateAnglesCos(sideA, sideB, sideC);
    }

     return data;
  }

  calculateAnglesCos(sideA : number, sideB: number, sideC: number): Angles {
    const cosA = (sideB * sideB + sideC * sideC - sideA * sideA) / (2 * sideB * sideC);
    const cosB = (sideA * sideA + sideC * sideC - sideB * sideB) / (2 * sideA * sideC);
    const cosC = (sideA * sideA + sideB * sideB - sideC * sideC) / (2 * sideA * sideB);
    return { cosA, cosB, cosC };
  }

  classifyTriangle(sideA: number, sideB: number, sideC: number): Classification {
    if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
      return null
    }

    if (sideA === sideB && sideB === sideC) {
      return Classification.Equilatero;
    }

    if (sideA === sideB || sideA === sideC || sideB === sideC) {
      return Classification.Isosceles;
    }

    return Classification.Escaleno;
  }
}
