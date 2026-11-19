import { defineField, defineType, defineArrayMember } from 'sanity'
import { UserIcon } from '@sanity/icons/User'

export const profile = defineType({
  name: 'profile',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      description: 'Your display name (e.g. Ritchie)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headline',
      type: 'string',
      description: 'Primary title (e.g. Software Engineer)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      description: 'e.g. based in Penang, Malaysia',
    }),
    defineField({
      name: 'subheading',
      type: 'string',
      description: 'e.g. Major in AI and minor in Mathematics',
    }),
    defineField({
      name: 'email',
      type: 'string',
      description: 'Contact email address (e.g. ritchiepoh@gmail.com)',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          initialValue: 'Profile Picture',
        }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      type: 'object',
      fields: [
        defineField({
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        }),
        defineField({
          name: 'github',
          title: 'GitHub URL',
          type: 'url',
        }),
        defineField({
          name: 'stackoverflow',
          title: 'Stack Overflow URL',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'aboutMe',
      title: 'About Me (Story)',
      type: 'array',
      description: 'Your journey / "How I got here?" story',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'headline',
      media: 'avatar',
    },
  },
})
