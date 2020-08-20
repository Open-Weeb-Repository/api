import assert from 'assert';
import app from '../../src/app';

describe('\'series\' service', () => {
  it('registered the service', () => {
    const service = app.service('series');

    assert.ok(service, 'Registered the service');
  });
});
