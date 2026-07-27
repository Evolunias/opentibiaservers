import YurotsCanadaServerKeywordPage, { generateMetadata } from './yurots-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsCanadaServerKeywordPage />;
}
