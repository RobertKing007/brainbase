import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';

const axios = require("axios");

  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodos: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  let todo: Todo;
  //get all todos from dumby api in a promise
  axios.request(`https://jsonplaceholder.typicode.com/todos/${event.pathParameters.id}`)
  .then((responseData) => {
    console.log(responseData)
    if(responseData?.id) {
      //send back all users
     todo = responseData
    }
  })
  .catch((error) => {
    return apiResponse._400(error);
  });

  if(todo) {
    return apiResponse._200(todo);

  }
}

// quick and easy response
const apiResponse = {
  _200: (body: any) => {
    return formatJSONResponse ({
      statusCode: 200,
      body: body
    })
  },
  _400: (body: any) => {
    return formatJSONResponse ({
      statusCode: 400,
      body: body
    })
  }
}

export const main = middyfy(getTodos);