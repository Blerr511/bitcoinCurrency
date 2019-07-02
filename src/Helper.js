

export const helper = responce => {
    return responce.json()
        .then(json => {
            return responce.ok ? json : Promise.reject(json)
        })
};