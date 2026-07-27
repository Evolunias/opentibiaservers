import YurotsLatinAmericaServerKeywordPage, { generateMetadata } from './yurots-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsLatinAmericaServerKeywordPage />;
}
