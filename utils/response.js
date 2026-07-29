function sendJson(res, statusCode, success, message, data = null, meta = null) {
    const payload = {
        success,
        message,
    };

    if (data !== null) {
        payload.data = data;
    }

    if (meta !== null) {
        payload.meta = meta;
    }

    return res.status(statusCode).json(payload);
}

function sendSuccess(res, message, data = null, statusCode = 200, meta = null) {
    return sendJson(res, statusCode, true, message, data, meta);
}

function sendCreated(res, message, data = null, meta = null) {
    return sendJson(res, 201, true, message, data, meta);
}

function sendError(res, message, statusCode = 500, data = null) {
    return sendJson(res, statusCode, false, message, data);
}

module.exports = {
    sendJson,
    sendSuccess,
    sendCreated,
    sendError,
};