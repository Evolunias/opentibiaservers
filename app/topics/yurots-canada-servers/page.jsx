import YurotsCanadaServersKeywordPage, { generateMetadata } from './yurots-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsCanadaServersKeywordPage />;
}
