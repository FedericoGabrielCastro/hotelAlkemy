import { setSearchAction } from "../setSearchAction";

describe('set searching actions', () => {
    
    it('should be return setSearchAction', () => {
        const search = ""
        const expectation = {
            type: "SEARCHING",
            search
        }

        expect(setSearchAction(search)).toEqual(expectation)
    });
});