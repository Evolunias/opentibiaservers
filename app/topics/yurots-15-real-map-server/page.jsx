import Yurots15RealMapServerKeywordPage, { generateMetadata } from './yurots-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots15RealMapServerKeywordPage />;
}
