import YurotsGuildsKeywordPage, { generateMetadata } from './yurots-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsGuildsKeywordPage />;
}
