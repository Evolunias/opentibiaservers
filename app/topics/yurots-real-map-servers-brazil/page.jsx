import YurotsRealMapServersBrazilKeywordPage, { generateMetadata } from './yurots-real-map-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsRealMapServersBrazilKeywordPage />;
}
