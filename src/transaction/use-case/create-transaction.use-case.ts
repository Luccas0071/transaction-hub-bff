import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";


@Injectable()
export class CreateTransactionUseCase
{
    constructor(private readonly httpService:HttpService){}

    async getMake()
    {
        const response = await firstValueFrom(
            this.httpService.get('http://makeup-api.herokuapp.com/api/v1/products.json')
        );
        
        return response.data;
    }
}