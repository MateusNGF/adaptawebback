import { Controller, Get, Post, Body, Req, Res, HttpException, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseClassification } from './model/response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/triangle/classify")
  processTriangle(@Body() body: any): ResponseClassification {
    if (!body) throw new BadRequestException('Body is required');

    const { sideA, sideB, sideC } = body;
    if (!sideA || !sideB || !sideC) throw new BadRequestException('Triangle side not found');
    
    return this.appService.processTriangle(Number(sideA), Number(sideB), Number(sideC));
  }

}
