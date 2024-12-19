 import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'joao silva',
  })
  @IsNotEmpty({ message: 'O campo name não pode ser vazio' })
  @IsString({ message: 'O campo name deve ser uma string' })
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'joaosilva@email.com',
  })
  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  @IsString({ message: 'O campo email deve ser uma string' })
  email: string;
  @ApiProperty({
    description: 'Senha do usuário, com no mínimo 6 caracteres',
    example: 'senhaSegura123',
    minLength: 6,
  })
  @IsNotEmpty({ message: ' O campo senha não pode ser vazio' })
  @IsString({ message: 'O campo senha deve ser uma string' })
  @MinLength(6, { message: 'O campo senha deve ter no mínimo 6 caracteres' })
  password: string;
}
