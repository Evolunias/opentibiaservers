import YurotsPvpServerEuropeKeywordPage, { generateMetadata } from './yurots-pvp-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsPvpServerEuropeKeywordPage />;
}
