import { Stream } from "stream";

type Parameterz = Parameter[];
type Parameter = Record<string, string>;
type Headers = Parameterz;


export class Status {
    code? : number; 
    description?: String;

    constructor(code: number, description: String) {
        this.code = code;
        this.description = description; 
    }

    static OK = new Status(200, "OK")
    static CREATED = new Status(201, "Created")

}


interface HttpMessage {
    headers: Parameterz;
}

export interface Request extends HttpMessage {

}

export abstract class Response implements HttpMessage {

    abstract headers: Parameterz;

    static create(status: Status) : Response {
        return new MemoryResponse([])
        
    }
}



class MemoryResponse implements Response {
    constructor(header : Headers = []) {
        this.headers = header
    }
    
    headers: Parameterz;
}

type ReponseBlah = Response | MemoryResponse

interface Body {
    headers: Headers
    stream: Stream;
    version: String;
    toMessage(): String;
}

type HttpHandler = (req: Request) => ReponseBlah