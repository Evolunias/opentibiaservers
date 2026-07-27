import YurotsRealMapServerUsaKeywordPage, { generateMetadata } from './yurots-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsRealMapServerUsaKeywordPage />;
}
