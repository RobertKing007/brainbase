import schema from './schema';
import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'getTodo/{id}',
        request: {
          schema: {
            'application/json': schema
          },
          //makes testing easier. probably not going to do this with real code...
          cors:true
        }
      }
    }
  ]
}
