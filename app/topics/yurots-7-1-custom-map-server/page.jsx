import Yurots71CustomMapServerKeywordPage, { generateMetadata } from './yurots-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots71CustomMapServerKeywordPage />;
}
