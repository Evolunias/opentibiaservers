import YurotsNorthAmericaServerKeywordPage, { generateMetadata } from './yurots-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsNorthAmericaServerKeywordPage />;
}
