import YurotsBossesKeywordPage, { generateMetadata } from './yurots-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsBossesKeywordPage />;
}
