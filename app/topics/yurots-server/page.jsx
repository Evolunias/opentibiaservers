import YurotsServerKeywordPage, { generateMetadata } from './yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsServerKeywordPage />;
}
