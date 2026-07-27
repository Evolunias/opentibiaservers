import YurotsCustomMapServerMexicoKeywordPage, { generateMetadata } from './yurots-custom-map-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsCustomMapServerMexicoKeywordPage />;
}
