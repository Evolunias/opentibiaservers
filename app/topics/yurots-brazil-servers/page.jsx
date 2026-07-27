import YurotsBrazilServersKeywordPage, { generateMetadata } from './yurots-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsBrazilServersKeywordPage />;
}
