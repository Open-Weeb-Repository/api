// Initializes the `series` service on path `/series`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Series } from './series.class';
import hooks from './series.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'series': Series & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/series', new Series(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('series');

  service.hooks(hooks);
}
