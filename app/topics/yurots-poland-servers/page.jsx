import YurotsPolandServersKeywordPage, { generateMetadata } from './yurots-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsPolandServersKeywordPage />;
}
