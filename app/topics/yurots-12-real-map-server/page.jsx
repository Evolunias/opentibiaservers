import Yurots12RealMapServerKeywordPage, { generateMetadata } from './yurots-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots12RealMapServerKeywordPage />;
}
