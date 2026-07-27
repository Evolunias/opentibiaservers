import Xanteria12PvpServerKeywordPage, { generateMetadata } from './xanteria-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria12PvpServerKeywordPage />;
}
