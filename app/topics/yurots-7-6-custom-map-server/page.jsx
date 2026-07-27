import Yurots76CustomMapServerKeywordPage, { generateMetadata } from './yurots-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots76CustomMapServerKeywordPage />;
}
