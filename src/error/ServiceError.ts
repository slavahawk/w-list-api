export class AuthServiceError extends Error {
    constructor(message: string, public errorCode?: number) {
        super(message);
        this.name = 'AuthServiceError';
    }
}
