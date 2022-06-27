const STATUS={
    SUCCESS : 200,
    CREATED : 201,
    BAD_REQUEST : 400,
    UNAUTHORIZED : 401, // no token
    PAYMENT_REQUIRED : 402, 
    FORBIDDEN :403, //  when a client has valid credentials but not enough privileges to perform an action on a resource.
    NOT_FOUND : 404,

}

module.exports = {
    STATUS:STATUS
}
