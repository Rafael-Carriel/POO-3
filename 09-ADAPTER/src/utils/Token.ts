export default class Token{
    private _token : string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFmYWVsIENhcnJpZWwiLCJkaXNjaXBsaW5hIjoiUE9PMyIsInR1cm1hIjoyfQ.EZasZo7kkbWkrcHBqBRdk542La4SQpIVyrCAXLD_8qQ";

    get token() : string{
        return this._token;
    }
}