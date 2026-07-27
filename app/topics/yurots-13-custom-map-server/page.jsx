import Yurots13CustomMapServerKeywordPage, { generateMetadata } from './yurots-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots13CustomMapServerKeywordPage />;
}
