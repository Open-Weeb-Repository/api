import assert from 'assert';
import app from '../../src/app';

describe('\'providers\' service', () => {
  it('registered the service', () => {
    const service = app.service('providers');

    assert.ok(service, 'Registered the service');
  });
});
