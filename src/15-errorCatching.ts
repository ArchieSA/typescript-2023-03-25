try {
    throw 'asda';
    throw null;
    throw {}
} catch (error: unknown) {
    getErrorMessage(error);
}

export function getErrorMessage(error: unknown) {
    if (error instanceof Error) {
        return error.message;
    }
}