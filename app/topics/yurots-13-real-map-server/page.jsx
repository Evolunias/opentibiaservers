import Yurots13RealMapServerKeywordPage, { generateMetadata } from './yurots-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots13RealMapServerKeywordPage />;
}
