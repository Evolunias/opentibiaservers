import Xanteria84RetroServerKeywordPage, { generateMetadata } from './xanteria-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria84RetroServerKeywordPage />;
}
