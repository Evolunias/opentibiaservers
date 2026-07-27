import Yurots14RealMapServerKeywordPage, { generateMetadata } from './yurots-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots14RealMapServerKeywordPage />;
}
