import XanteriaFranceServerKeywordPage, { generateMetadata } from './xanteria-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaFranceServerKeywordPage />;
}
