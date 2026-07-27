import Xanteria13RetroServerKeywordPage, { generateMetadata } from './xanteria-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria13RetroServerKeywordPage />;
}
