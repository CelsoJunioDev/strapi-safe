const customRoutes = [
    {
        method: 'GET',
        path: '/posts/slug/:slug',
        handler: 'post.findBySlug',
        config: {
            policies: [],
            middlewares: [],
        },
    },
];

export default customRoutes;
