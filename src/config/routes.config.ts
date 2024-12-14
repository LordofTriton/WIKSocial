const authRoutes = {
    login: "/login",
    forgotPassword: "/forgot-password"
}

const userRoutes = {
    index: "/user/index",
    profile: "/user/profile",
    posts: "/user/posts",
    communities: "/user/communities"
}

export const RouteConfig = {
    auth: authRoutes,
    user: userRoutes,

    public: [
        authRoutes.login,
        authRoutes.forgotPassword
    ]
}