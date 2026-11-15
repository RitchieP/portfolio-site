import { defineField, defineType, defineArrayMember } from 'sanity'
import { CaseIcon } from '@sanity/icons/Case'

export const experience = defineType({
  name: 'experience',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'jobTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'employmentType',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Internship', value: 'Internship' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Freelance', value: 'Freelance' },
        ],
      },
    }),
    defineField({
      name: 'startDate',
      type: 'string',
      description: 'e.g. July 2025',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      type: 'string',
      description: 'e.g. May 2026 (leave empty if current)',
    }),
    defineField({
      name: 'isCurrent',
      title: 'Current Position',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'bulletPoints',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      validation: (rule) => rule.required(),
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
      title: 'jobTitle',
      company: 'company',
      employmentType: 'employmentType',
      startDate: 'startDate',
      endDate: 'endDate',
      isCurrent: 'isCurrent',
    },
    prepare({ title, company, employmentType, startDate, endDate, isCurrent }) {
      const dates = [startDate, isCurrent ? 'Present' : endDate].filter(Boolean).join(' - ')
      const prefix = employmentType ? `[${employmentType}] ` : ''
      return {
        title: `${prefix}${title || 'Untitled'}`,
        subtitle: [company, dates].filter(Boolean).join(' | '),
      }
    },
  },
})
