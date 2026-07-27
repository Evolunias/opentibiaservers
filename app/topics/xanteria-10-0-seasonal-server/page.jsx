import Xanteria100SeasonalServerKeywordPage, { generateMetadata } from './xanteria-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria100SeasonalServerKeywordPage />;
}
