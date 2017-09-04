
export class RequestModel {

    type: string;       // type request
    status: boolean;    // status request
    data: object;       // data request

    constructor(
        type: string = "test",
        status: boolean = false,
        data: object = null
    ) {
        this.type = type;
        this.status = status;
        this.data = data;
    }

}