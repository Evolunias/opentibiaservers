import Xanteria11RetroServerKeywordPage, { generateMetadata } from './xanteria-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria11RetroServerKeywordPage />;
}
