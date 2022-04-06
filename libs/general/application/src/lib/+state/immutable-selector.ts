import { createSelectorFactory, defaultMemoize } from '@ngrx/store';
import * as ObjectHash from "object-hash";
import { cloneDeep } from "lodash";

// not works
export const createImmutableSelector = createSelectorFactory(projectionFunction => {
    const cache: any = {};

    function memoized() {
        //ts
        // eslint-disable-next-line prefer-rest-params
        const hashedArguments = ObjectHash.sha1([...arguments]);
        if (cache[hashedArguments] == null) {
            // eslint-disable-next-line prefer-spread,prefer-rest-params
            // @ts-ignore
            // eslint-disable-next-line prefer-spread,prefer-rest-params
            cache[hashedArguments] = projectionFunction.apply(null, arguments);
        }
        return cloneDeep(cache[hashedArguments]);
    }
    return {
        memoized,
        reset: () => {},
        setResult: () => {},
        clearResult: () => {}
    };
});

