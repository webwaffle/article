module.exports = [
    {
        route: "/",
        method: "get",
        controller_name: "index"
    },
    {
        route: "/create-article",
        method: "get",
        controller_name: "create-article"
    },
    {
        route: "/api/post-article",
        method: "post",
        controller_name: "api/post-article"
    },
    {
        route: "/api/articles",
        method: "get",
        controller_name: "api/get-articles"
    }
]