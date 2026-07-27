import Xanteria13PvpServerKeywordPage, { generateMetadata } from './xanteria-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria13PvpServerKeywordPage />;
}
