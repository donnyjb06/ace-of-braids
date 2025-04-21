import { getPayload } from 'payload'
import config from '@/payload.config'
import Hero from '@/blocks/Hero/Hero';

export default async function LandingPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig });

  const blocks = await payload.findGlobal({ slug: "landing" });

  
  return(
    blocks.layout.map((block, index) => {
      switch (block.blockType) {
        case 'hero-block':
          return <Hero key={index} {...block} />;
        default: 
        return null
      }
    })
  )
}
