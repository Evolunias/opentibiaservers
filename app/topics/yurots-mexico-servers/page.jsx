import YurotsMexicoServersKeywordPage, { generateMetadata } from './yurots-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsMexicoServersKeywordPage />;
}
