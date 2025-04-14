import { GlobalConfig } from 'payload'
import { HeroBlock } from '@/blocks/Hero/HeroBlock'
import { AboutBlock } from '@/blocks/About/AboutBlock'
import { ServicesBlock } from '@/blocks/Services/ServicesBlock'
import { GalleryBlock } from '@/blocks/Gallery/GalleryBlock'
import { TestimonialsBlock } from '@/blocks/Testimonials/TestimonialsBlock'

export const Landing: GlobalConfig = {
  slug: 'landing',
  fields: [
    {
      type: 'blocks',
      name: 'layout',
      blocks: [HeroBlock, AboutBlock, ServicesBlock, GalleryBlock, TestimonialsBlock],
      required: true,
    },
  ],
}
