import YurotsGermanyServerKeywordPage, { generateMetadata } from './yurots-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsGermanyServerKeywordPage />;
}
