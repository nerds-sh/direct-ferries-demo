import { useIsDisabled } from "./hooks";

export const Submit = () => <button type={'submit'} disabled={useIsDisabled()}>
    Submit
</button> 