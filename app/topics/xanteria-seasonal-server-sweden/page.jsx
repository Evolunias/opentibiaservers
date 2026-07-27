import XanteriaSeasonalServerSwedenKeywordPage, { generateMetadata } from './xanteria-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaSeasonalServerSwedenKeywordPage />;
}
