import YurotsArgentinaServerKeywordPage, { generateMetadata } from './yurots-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsArgentinaServerKeywordPage />;
}
