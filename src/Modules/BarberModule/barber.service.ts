import { Injectable } from '@nestjs/common';
import { Barber } from './schema/barber.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BarberService {
  constructor(@InjectModel(Barber.name) private barberModel: Model<Barber>) {}

  createBarber(barberInfo) {
    const barber = new this.barberModel(barberInfo);
    return barber.save();
  }

  async getAllBarbers() {
    // const barbers = await this.barberModel.aggregate([
    //   {
    //     $lookup: {
    //       from: 'bookings',
    //       localField: '_id',
    //       foreignField: 'barbers',
    //       as: 'bookings',
    //     },
    //   },
    // ]);
    // return barbers;
    return this.barberModel.find({}).exec();
  }

  getBarberById(id) {
    return this.barberModel.findById(id).populate('bookings');
  }
}
