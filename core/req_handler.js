export const getAuthHeader = (req) => {
    return req.headers['authorization'] || req.headers['Authorization'] || null;
};

export const okResponse = (res, payload = {}) => {
    // Calling res.status().json() terminates the response cycle
    return res.status(200).json(payload);
};

export const notAuthenticated = (res, message = "Unauthorized") => {
    return res.status(401).json({ error: message });
};