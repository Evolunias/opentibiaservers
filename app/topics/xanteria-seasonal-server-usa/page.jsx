import XanteriaSeasonalServerUsaKeywordPage, { generateMetadata } from './xanteria-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaSeasonalServerUsaKeywordPage />;
}
