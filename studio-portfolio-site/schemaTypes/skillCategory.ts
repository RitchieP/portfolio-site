import { defineField, defineType, defineArrayMember } from 'sanity'
import { WrenchIcon } from '@sanity/icons/Wrench'

export const skillCategory = defineType({
  name: 'skillCategory',
  type: 'document',
  icon: WrenchIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'e.g. Frontend, Backend, Soft Skills, Others',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'skills',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        layout: 'tags',
      },
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Manual Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      skills: 'skills',
    },
    prepare({ title, skills = [] }) {
      return {
        title: title || 'Untitled Category',
        subtitle: skills.length > 0 ? skills.join(', ') : 'No skills listed',
      }
    },
  },
})
