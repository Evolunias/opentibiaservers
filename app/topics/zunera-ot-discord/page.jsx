import ZuneraOtDiscordKeywordPage, { generateMetadata } from './zunera-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtDiscordKeywordPage />;
}
