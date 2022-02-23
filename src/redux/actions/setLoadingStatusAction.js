import { LOADING } from "../types/types"

export const setLoadingStatusAction = (loading) => ({
    type: LOADING,
    loading
})
