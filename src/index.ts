export default {
  register() { },

  bootstrap({ strapi }) {
    strapi.server.routes([
      {
        method: 'GET',
        path: '/api/posts/slug/:slug',
        handler: async (ctx) => {
          const { slug } = ctx.params;

          const post = await strapi.db.query('api::post.post').findOne({
            where: { slug },
            populate: ['featuredImage', 'category'], // ajuste os relacionamentos aqui
          });

          if (!post) {
            return ctx.notFound('Post não encontrado');
          }

          ctx.body = post;
        },
        config: {
          auth: false, // ou true se quiser proteger
        },
      },
    ]);
  },
};
