import XanteriaSeasonKeywordPage, { generateMetadata } from './xanteria-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaSeasonKeywordPage />;
}
