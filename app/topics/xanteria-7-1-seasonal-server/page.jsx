import Xanteria71SeasonalServerKeywordPage, { generateMetadata } from './xanteria-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria71SeasonalServerKeywordPage />;
}
