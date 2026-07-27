import Xanteria12RetroServerKeywordPage, { generateMetadata } from './xanteria-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria12RetroServerKeywordPage />;
}
