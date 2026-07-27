import Yurots74CustomMapServerKeywordPage, { generateMetadata } from './yurots-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots74CustomMapServerKeywordPage />;
}
