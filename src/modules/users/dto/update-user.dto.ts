import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    nom: string
    prenom: string
    mail: string
    dateNaissance: Date
    postId?:string
}
