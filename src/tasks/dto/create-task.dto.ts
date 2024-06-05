import { IsArray, IsDate, IsEmpty, IsIn, IsNotEmpty, IsOptional, IsString, IsUppercase, MaxLength, MinLength } from "class-validator";

export class CreateTaskDto {

    @IsString()
    @MinLength(5)
    @IsUppercase({message:'debe ser en mayusculas!!'})
    @MaxLength(6,{message: 'debe tener maximo 6 caracteres'})
    @IsNotEmpty({message: 'no debe estar vacio'})
    title: string;


    @IsString()
    @MinLength(5)
    @IsNotEmpty({message: 'no debe estar vacio'})
    description: string;

    @IsIn(['PENDING','IN_PROGRESS', 'DONE'])
    @IsString()
    status: string;

    @IsDate()
    @IsOptional()
    createdAt: Date;




}
