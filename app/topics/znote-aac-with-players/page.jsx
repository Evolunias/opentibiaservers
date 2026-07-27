import ZnoteAacWithPlayersKeywordPage, { generateMetadata } from './znote-aac-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacWithPlayersKeywordPage />;
}
