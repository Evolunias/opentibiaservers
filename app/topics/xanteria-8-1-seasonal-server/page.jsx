import Xanteria81SeasonalServerKeywordPage, { generateMetadata } from './xanteria-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria81SeasonalServerKeywordPage />;
}
