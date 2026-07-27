import ZuneraOtGuildsKeywordPage, { generateMetadata } from './zunera-ot-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtGuildsKeywordPage />;
}
