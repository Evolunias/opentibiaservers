import XanteriaSeasonalServerFranceKeywordPage, { generateMetadata } from './xanteria-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaSeasonalServerFranceKeywordPage />;
}
