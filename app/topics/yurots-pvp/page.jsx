import YurotsPvpKeywordPage, { generateMetadata } from './yurots-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsPvpKeywordPage />;
}
