

// const app: HttpHandler = { req(): any => ReponseBlah()  }

import { Response, Status } from "./packages/core/http";

console.log(JSON.stringify(Response.create(Status.OK)))