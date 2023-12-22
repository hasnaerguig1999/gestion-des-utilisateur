import { from } from "rxjs";
import {
    ArgumentsHost,
    BadRequestException,
    Catch,
    ExceptionFilter,
}from '@nestjs/common';
import { response } from "express";

export class ValidationException extends BadRequestException{
    constructor(public validationErrors:any){
        super();
    }
}

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost):any {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        return response.status(400).json({
            statusCode:400,
            success: false,
            message:'',
            error:exception.validationErrors,
        });
        
    }

}