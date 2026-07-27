import XanteriaRetroServerUsaKeywordPage, { generateMetadata } from './xanteria-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaRetroServerUsaKeywordPage />;
}
