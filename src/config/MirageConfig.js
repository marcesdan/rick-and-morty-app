// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.urlPrefix = 'https://rickandmortyapi.com/api/';
    this.get('', () => [
    ]);
    this.post('', () => {});
  },
});
