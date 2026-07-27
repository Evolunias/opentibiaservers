import Yurots15CustomMapServerKeywordPage, { generateMetadata } from './yurots-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots15CustomMapServerKeywordPage />;
}
