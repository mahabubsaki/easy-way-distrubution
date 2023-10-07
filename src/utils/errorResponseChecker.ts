type ErrorResponse = {
    endpoint: string;
    message: string;
    params: { [key: string]: any; };
    query: { [key: string]: any; };
    status: number;
};
export default function isErrorResponse(obj: any): obj is ErrorResponse {
    return (
        typeof obj.endpoint === "string" &&
        typeof obj.message === "string" &&
        typeof obj.params === "object" &&
        typeof obj.query === "object" &&
        typeof obj.status === "number"
    );
}