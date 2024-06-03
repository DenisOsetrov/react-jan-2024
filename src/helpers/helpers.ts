const retrieveLocalStorageData = <T,> (key:string) => {
    const pairJSON = localStorage.getItem(key) || ''; // отримує json пару токенів чи пусту стрінгу
    const pair = JSON.parse(pairJSON);

    if (!pairJSON) {
        return {} as T;
    }
    return pair as T;
}

export {
    retrieveLocalStorageData
}