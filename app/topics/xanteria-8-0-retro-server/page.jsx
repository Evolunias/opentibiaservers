import Xanteria80RetroServerKeywordPage, { generateMetadata } from './xanteria-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria80RetroServerKeywordPage />;
}
