import type { RootStore } from "./store/RootStore";
import { createContext, useContext } from 'react';

export const RootStoreContext = createContext<RootStore | null>(null);

export function useGame() {
    const store = useContext(RootStoreContext);
    if (!store) {
        throw new Error('useGame must be used within a RootStoreProvider');
    } else {
        return store;
    }
}
