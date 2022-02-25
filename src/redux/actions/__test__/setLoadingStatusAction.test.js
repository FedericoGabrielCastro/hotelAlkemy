import { setLoadingStatusAction } from "../setLoadingStatusAction";

describe('set loading actions', () => {
    
    it('should be return setLoadingStatusAction', () => {
        const loading = false
        const expectation = {
            type: "LOADING",
            loading
        }

        expect(setLoadingStatusAction(loading)).toEqual(expectation)
    });
});