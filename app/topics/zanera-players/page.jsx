import ZaneraPlayersKeywordPage, { generateMetadata } from './zanera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZaneraPlayersKeywordPage />;
}
