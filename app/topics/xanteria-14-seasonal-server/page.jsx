import Xanteria14SeasonalServerKeywordPage, { generateMetadata } from './xanteria-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria14SeasonalServerKeywordPage />;
}
