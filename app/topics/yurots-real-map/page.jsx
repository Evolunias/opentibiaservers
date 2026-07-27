import YurotsRealMapKeywordPage, { generateMetadata } from './yurots-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsRealMapKeywordPage />;
}
