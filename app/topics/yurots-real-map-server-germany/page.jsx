import YurotsRealMapServerGermanyKeywordPage, { generateMetadata } from './yurots-real-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsRealMapServerGermanyKeywordPage />;
}
