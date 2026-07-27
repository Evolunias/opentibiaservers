import XanteriaGuildsKeywordPage, { generateMetadata } from './xanteria-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaGuildsKeywordPage />;
}
