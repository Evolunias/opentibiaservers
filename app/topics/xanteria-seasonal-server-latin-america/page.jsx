import XanteriaSeasonalServerLatinAmericaKeywordPage, { generateMetadata } from './xanteria-seasonal-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaSeasonalServerLatinAmericaKeywordPage />;
}
