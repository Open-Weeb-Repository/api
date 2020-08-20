// Initializes the `providers` service on path `/providers`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Providers } from './providers.class';
import hooks from './providers.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'providers': Providers & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/providers', new Providers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('providers');

  service.hooks(hooks);
}
