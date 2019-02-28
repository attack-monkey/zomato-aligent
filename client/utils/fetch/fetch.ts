interface Options {
    headers?: any,
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
}

export const $fetch = async (url: string, options: Options) => {
    try {
        const response = await fetch(url, options);
        return response.json();
    } catch (e) {
        return { error: e };
    }
}