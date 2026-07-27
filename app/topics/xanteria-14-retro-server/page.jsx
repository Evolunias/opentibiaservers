import Xanteria14RetroServerKeywordPage, { generateMetadata } from './xanteria-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria14RetroServerKeywordPage />;
}
