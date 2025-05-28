import { PartialType } from '@nestjs/mapped-types';
import { CreateAvanzado3Dto } from './create-avanzado-3.dto';

export class UpdateAvanzado3Dto extends PartialType(CreateAvanzado3Dto) {}
