import Xanteria80SeasonalServerKeywordPage, { generateMetadata } from './xanteria-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria80SeasonalServerKeywordPage />;
}
