import { Db } from 'mongodb';
import { Service, MongoDBServiceOptions } from 'feathers-mongodb';
import { Application } from '../../declarations';
import createApplication from "@feathersjs/feathers";
import {NotImplemented} from "@feathersjs/errors";

export class Projects extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<MongoDBServiceOptions>, app: Application) {
    super(options);

    const client: Promise<Db> = app.get('mongoClient');

    client.then(db => {
      this.Model = db.collection('projects');
    });
  }

  async create(data: Partial<any> | Partial<any>[], params?: createApplication.Params): Promise<any[] | any> {
    throw new NotImplemented();
  }

  async update(id: createApplication.Id, data: any, params?: createApplication.Params): Promise<any> {
    throw new NotImplemented();
  }

  async remove(id: createApplication.NullableId, params?: createApplication.Params): Promise<any[] | any> {
    throw new NotImplemented();
  }
};
