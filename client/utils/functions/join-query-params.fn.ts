export const joinQueryParams = (list: Array<string | undefined>) => {
    const filteredList = list.filter(item => item);
    if (!filteredList.length) return '';
    return '?' + filteredList.join('&');
}