import YurotsPolandServerKeywordPage, { generateMetadata } from './yurots-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsPolandServerKeywordPage />;
}
