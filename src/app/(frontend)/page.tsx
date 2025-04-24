import { getPayload } from 'payload'
import config from '@/payload.config'
import RenderBlocks from '@/components/RenderBlocks/RenderBlocks'

export default async function LandingPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const blocks = await payload.findGlobal({ slug: 'landing' })

  return <RenderBlocks blocks={blocks.layout} />
}
