export type SliceState<Attempt, Success, Error> = {
    input: Attempt,
    data: Success,
    errors: Error
}
