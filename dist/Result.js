function handleResult(result) {
    if (result.succeeded) {
        console.log(`We did it! ${result.data}`);
    }
    else {
        console.error(`Awww... ${result.error}`);
    }
}
export { handleResult };
//# sourceMappingURL=Result.js.map