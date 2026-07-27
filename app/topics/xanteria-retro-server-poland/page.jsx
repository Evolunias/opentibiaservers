import XanteriaRetroServerPolandKeywordPage, { generateMetadata } from './xanteria-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaRetroServerPolandKeywordPage />;
}
