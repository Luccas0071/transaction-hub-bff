import { Module } from "@nestjs/common";
import { TransactionController } from "./transaction.controller";
import { CreateTransactionUseCase } from "./use-case/create-transaction.use-case";
import { HttpModule } from "@nestjs/axios";


@Module({
    imports:[HttpModule],
    controllers:[TransactionController],
    providers:[CreateTransactionUseCase]
})
export class TransactionModule {}