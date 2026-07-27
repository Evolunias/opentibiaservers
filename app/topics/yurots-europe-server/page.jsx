import YurotsEuropeServerKeywordPage, { generateMetadata } from './yurots-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsEuropeServerKeywordPage />;
}
