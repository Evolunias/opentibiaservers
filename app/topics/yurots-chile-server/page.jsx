import YurotsChileServerKeywordPage, { generateMetadata } from './yurots-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsChileServerKeywordPage />;
}
