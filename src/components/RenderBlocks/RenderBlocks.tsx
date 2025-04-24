'use client';

import Hero from "@/blocks/Hero/Hero";
import About from "@/blocks/About/About";

interface GenericBlock {
  id?: string | null | number; 
  blockType: string;          
  [key: string]: any;         
}

const blockComponents: Record<string, React.FC<any>> = {
  'hero-block': Hero,
  'about-block': About
}

interface RenderBlocksProps {
  blocks: GenericBlock[] | null | undefined;
}

const RenderBlocks: React.FC<RenderBlocksProps> = ({ blocks }) => {
  if (!blocks || blocks.length === 0) {
    console.warn("No blocks were provided to the RenderBlocks functional component!")
    return null;
  }

  return(
    <>
      {blocks.map(( block, index ) => {
        const BlockComponent = blockComponents[block.blockType];
        const key = block.id || index;

        if (!BlockComponent) {
          console.warn(`No component found for block type: ${block.blockType}`);
          return null;
        }

        return <BlockComponent key={key} {...block} />;
      })}
    </>
  )
}

export default RenderBlocks;