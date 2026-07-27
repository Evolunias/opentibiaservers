import YurotsCustomMapServerArgentinaKeywordPage, { generateMetadata } from './yurots-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsCustomMapServerArgentinaKeywordPage />;
}
