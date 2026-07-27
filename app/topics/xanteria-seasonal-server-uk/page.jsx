import XanteriaSeasonalServerUkKeywordPage, { generateMetadata } from './xanteria-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaSeasonalServerUkKeywordPage />;
}
