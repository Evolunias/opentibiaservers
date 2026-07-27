import ZnoteAacNonPvpKeywordPage, { generateMetadata } from './znote-aac-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacNonPvpKeywordPage />;
}
