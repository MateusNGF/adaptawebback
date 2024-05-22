import { Controller, Get, Post, Body, Req, Res, HttpException, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseClassification } from './model/response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/triangle/classify")
  processTriangle(@Body() triangle: any): ResponseClassification {
    if (!triangle) throw new BadRequestException('Triangle not defined');

    const { sideA, sideB, sideC } = triangle;
    if (!sideA || !sideB || !sideC) throw new BadRequestException('Triangle side not found');
    
    return this.appService.processTriangle(Number(sideA), Number(sideB), Number(sideC));
  }

}
