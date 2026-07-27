import YurotsArgentinaServersKeywordPage, { generateMetadata } from './yurots-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsArgentinaServersKeywordPage />;
}
