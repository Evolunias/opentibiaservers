import YurotsChileServersKeywordPage, { generateMetadata } from './yurots-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsChileServersKeywordPage />;
}
