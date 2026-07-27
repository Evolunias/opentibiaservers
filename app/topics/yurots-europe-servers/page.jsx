import YurotsEuropeServersKeywordPage, { generateMetadata } from './yurots-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsEuropeServersKeywordPage />;
}
