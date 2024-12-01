import { Controller, Get, Injectable } from "@nestjs/common";
import { CreateTransactionUseCase } from "./use-case/create-transaction.use-case";

@Controller("/transaction")
export class TransactionController
{
    constructor(
       private createTransactionUseCase:CreateTransactionUseCase
    ){}

    @Get()
    execute(){
        const response = this.createTransactionUseCase.getMake();       
        return response;
    }
}