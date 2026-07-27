import Xanteria81RetroServerKeywordPage, { generateMetadata } from './xanteria-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria81RetroServerKeywordPage />;
}
