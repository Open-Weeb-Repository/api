import { Application } from '../declarations';
import users from './users/users.service';
import series from './series/series.service';
import providers from './providers/providers.service';
import projects from './projects/projects.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(series);
  app.configure(providers);
  app.configure(projects);
}
