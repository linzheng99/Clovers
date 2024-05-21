import { defineField, defineType } from 'sanity'

import { PencilSwooshIcon } from '~/src/assets/icons';

export default defineType({
  name: 'post',
  title: '文章',
  type: 'document',
  icon: PencilSwooshIcon,
  fields: [
    defineField({
      name: 'title',
      title: '标题',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: '链接标识符',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: '主图',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: '分类',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'body',
      title: '内容',
      type: 'blockContent',
    }),
    defineField({
      name: 'description',
      title: '简介',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'publishedAt',
      title: '发布时间',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
      }
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'slug',
      media: 'mainImage',
    },
  },
})
