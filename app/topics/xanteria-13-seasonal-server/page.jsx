import Xanteria13SeasonalServerKeywordPage, { generateMetadata } from './xanteria-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria13SeasonalServerKeywordPage />;
}
