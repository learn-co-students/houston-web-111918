const request = method => (url, body) => {
    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        },
        body: JSON.stringify(body)
    })
        .then(resp => resp.json())
}

export const server = {
    get: request('GET'),
    patch: request('PATCH'),
    post: request('POST'),
    delete: request('DELETE'),
}

