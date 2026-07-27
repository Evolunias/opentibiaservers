import YurotsCustomMapServerGermanyKeywordPage, { generateMetadata } from './yurots-custom-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsCustomMapServerGermanyKeywordPage />;
}
