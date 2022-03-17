import { useErrors } from "./use-errors";

export const useIsDisabled = () => !!useErrors().length