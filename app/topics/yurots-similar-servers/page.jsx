import YurotsSimilarServersKeywordPage, { generateMetadata } from './yurots-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsSimilarServersKeywordPage />;
}
