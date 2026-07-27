import XanteriaSeasonalServerMexicoKeywordPage, { generateMetadata } from './xanteria-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaSeasonalServerMexicoKeywordPage />;
}
