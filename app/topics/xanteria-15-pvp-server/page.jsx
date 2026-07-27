import Xanteria15PvpServerKeywordPage, { generateMetadata } from './xanteria-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria15PvpServerKeywordPage />;
}
