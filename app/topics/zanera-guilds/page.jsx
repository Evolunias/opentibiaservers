import ZaneraGuildsKeywordPage, { generateMetadata } from './zanera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZaneraGuildsKeywordPage />;
}
