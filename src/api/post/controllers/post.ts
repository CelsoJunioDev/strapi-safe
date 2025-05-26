import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
    async findBySlug(ctx) {
        const { slug } = ctx.params;

        const post = await strapi.db.query('api::post.post').findOne({
            where: { slug },
            populate: ['featuredImage', 'category'],
        });

        if (!post) {
            return ctx.notFound('Post não encontrado');
        }

        return post;
    },
}));
