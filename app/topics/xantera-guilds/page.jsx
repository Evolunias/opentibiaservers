import XanteraGuildsKeywordPage, { generateMetadata } from './xantera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteraGuildsKeywordPage />;
}
