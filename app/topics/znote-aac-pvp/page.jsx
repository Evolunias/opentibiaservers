import ZnoteAacPvpKeywordPage, { generateMetadata } from './znote-aac-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacPvpKeywordPage />;
}
