import Xanteria15RetroServerKeywordPage, { generateMetadata } from './xanteria-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria15RetroServerKeywordPage />;
}
