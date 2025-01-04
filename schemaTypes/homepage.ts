import { defineArrayMember, defineField, defineType } from 'sanity';

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  options: {
    singleton: true,
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        { type: 'string', name: 'title' },
        { type: 'string', name: 'text' },
        defineField({
          name: 'video',
          type: 'file', // Type de fichier pour gérer les vidéos locales
          title: 'Video',
          options: {
            accept: 'video/*', // Accepter uniquement les fichiers vidéo
          },
        }),
        {
          name: 'stats',
          type: 'array',
          title: 'Stats for hero',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'stat',
              fields: [
                { type: 'string', name: 'value' },
                { type: 'string', name: 'text' },
              ],
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'features',
      type: 'object',
      title: 'Features',
      fields: [
        { name: 'title', type: 'string', title: 'Features Title' },
        { name: 'text', type: 'string', title: 'Features Description' },
        {
          name: 'cards',
          type: 'array',
          title: 'Feature Cards',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                { name: 'name', type: 'string', title: 'Feature Name' },
                { name: 'description', type: 'string', title: 'Feature Description' },
                { name: 'image', type: 'image', title: 'Feature Image' },
              ],
            }),
          ],
        },
      ],
    }),

    // Ajout de la section abonnements
    defineField({
      name: 'abonnements',
      type: 'array',
      title: 'Abonnements',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Nom de l\'abonnement' },
            { name: 'price', type: 'string', title: 'Prix' },
            { name: 'description', type: 'string', title: 'Description' },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true, // Permet de recadrer l'image
              },
            },
            { name: 'ctaText', type: 'string', title: 'Texte du bouton' },
            {
              name: 'type',
              type: 'string',
              title: 'Type d\'abonnement',
              options: {
                list: [
                  { title: 'Premium', value: 'premium' },
                  { title: 'VIP', value: 'vip' },
                ],
                layout: 'radio',
              },
              description: 'Le type d\'abonnement (Premium ou VIP)',
            },
          ],
        }),
      ],
    }),

    // Ajout du champ partenaires
    defineField({
      name: 'partenaires',
      type: 'object',
      title: 'Partenaires',
      fields: [
        { name: 'title', type: 'string', title: 'Titre des Partenaires' },
        { name: 'description', type: 'text', title: 'Description des Partenaires' },
        {
          name: 'images',
          type: 'array',
          title: 'Images des Partenaires',
          of: [{ type: 'image' }],
        },
      ],
    }),

    // Ajout de la section Reviews
    defineField({
      name: 'reviews',
      type: 'object',
      title: 'Reviews',
      fields: [
        { name: 'title', type: 'string', title: 'Titre des Reviews' },
        {
          name: 'cards',
          type: 'array',
          title: 'Avis Clients',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                { name: 'comment', type: 'text', title: 'Commentaire' },
                { name: 'name', type: 'string', title: 'Nom de la personne' },
                {
                  name: 'profilePicture',
                  type: 'image',
                  title: 'Photo de profil',
                  options: {
                    hotspot: true, // Permet de recadrer l'image
                  },
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
});
