type Result<Data> = FailureResult | SuccessfulResult<Data>;

interface FailureResult {
    error: Error;
    succeeded: false;
}

interface SuccessfulResult<Data> {
    data: Data;
    succeeded: true;
}

function handleResult(result: Result<string>) {
    if (result.succeeded) {
        console.log(`We did it! ${result.data}`);
    }
    else {
        console.error(`Awww... ${result.error}`);
    }
}

export {
    Result,
    FailureResult,
    SuccessfulResult,
    handleResult
};