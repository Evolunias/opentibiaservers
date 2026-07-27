import XanteriaRetroServerLatinAmericaKeywordPage, { generateMetadata } from './xanteria-retro-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaRetroServerLatinAmericaKeywordPage />;
}
