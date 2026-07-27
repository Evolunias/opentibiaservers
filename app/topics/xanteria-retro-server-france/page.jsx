import XanteriaRetroServerFranceKeywordPage, { generateMetadata } from './xanteria-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaRetroServerFranceKeywordPage />;
}
