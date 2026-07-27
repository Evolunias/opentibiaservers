import Xanteria76SeasonalServerKeywordPage, { generateMetadata } from './xanteria-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria76SeasonalServerKeywordPage />;
}
