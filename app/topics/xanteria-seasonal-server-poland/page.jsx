import XanteriaSeasonalServerPolandKeywordPage, { generateMetadata } from './xanteria-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaSeasonalServerPolandKeywordPage />;
}
