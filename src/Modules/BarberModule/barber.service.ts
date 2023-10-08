import { Injectable } from '@nestjs/common';
import { Barber } from './schema/barber.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BarberService {
  constructor(@InjectModel(Barber.name) private barberModel: Model<Barber>) {}

  async createBarber(barberInfo) {
    const barber = new this.barberModel(barberInfo);
    return await barber.save();
  }

  async getAllBarbers() {
    return this.barberModel.find({}).exec();
  }

  async getBarberById(id: string): Promise<any> {
    return await this.barberModel.findById(id).populate('bookings');
  }
}
