import YurotsSeasonKeywordPage, { generateMetadata } from './yurots-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsSeasonKeywordPage />;
}
