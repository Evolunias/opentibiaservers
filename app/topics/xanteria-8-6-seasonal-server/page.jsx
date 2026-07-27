import Xanteria86SeasonalServerKeywordPage, { generateMetadata } from './xanteria-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria86SeasonalServerKeywordPage />;
}
