export const getJsonFromLocalStorage = (key: string): any => {
    try {
        const localStore = localStorage.getItem(key);
        if (!localStore) return undefined;
        try{
            return JSON.parse(localStore);
        } catch (e) {
            return localStore
        }
    } catch (e) { return undefined }

}