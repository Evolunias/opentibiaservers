import YurotsPrivateServerKeywordPage, { generateMetadata } from './yurots-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsPrivateServerKeywordPage />;
}
