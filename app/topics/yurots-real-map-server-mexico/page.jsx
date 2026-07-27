import YurotsRealMapServerMexicoKeywordPage, { generateMetadata } from './yurots-real-map-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsRealMapServerMexicoKeywordPage />;
}
