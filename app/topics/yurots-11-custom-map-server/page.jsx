import Yurots11CustomMapServerKeywordPage, { generateMetadata } from './yurots-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots11CustomMapServerKeywordPage />;
}
