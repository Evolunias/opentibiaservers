import Xanteria11PvpServerKeywordPage, { generateMetadata } from './xanteria-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria11PvpServerKeywordPage />;
}
