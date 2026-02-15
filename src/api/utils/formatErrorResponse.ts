'use strict'

type ErrorResponse = {
    status: number,
    error: string, 
    message: string, 
    path: string,
    timestamp: string

}

type SuccessResponse = {
    status: number,
    message: string, 
    data: unknown,
    path: string,
    timestamp: string
}

export function formatErrorResponse(statusCode: number, errorType: string, message: string, path: string):
ErrorResponse {
    return {
        status: statusCode,
        error: errorType,
        message: message,
        path: path,
        timestamp: new Date().toISOString()
    };
};

export function formatSuccessResponse(statusCode: number, message: string, data: unknown, path: string):
SuccessResponse {
    return {
        status: statusCode,
        message,
        data,
        path,
        timestamp: new Date().toISOString()
    }
}