import YurotsRealMapServerLatinAmericaKeywordPage, { generateMetadata } from './yurots-real-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsRealMapServerLatinAmericaKeywordPage />;
}
