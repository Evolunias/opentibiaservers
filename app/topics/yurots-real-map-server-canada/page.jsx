import YurotsRealMapServerCanadaKeywordPage, { generateMetadata } from './yurots-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsRealMapServerCanadaKeywordPage />;
}
