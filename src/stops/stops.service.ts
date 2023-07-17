import { Injectable } from '@nestjs/common';

@Injectable()
export class StopsService {
  findAll() {
    return `This action returns all stops`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stop`;
  }

  updateAll() {
    return `This action updates all stops`;
  }

  remove(id: number) {
    return `This action removes a #${id} stop`;
  }
}
