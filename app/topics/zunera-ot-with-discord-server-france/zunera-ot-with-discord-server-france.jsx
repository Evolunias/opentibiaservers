import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-with-discord-server-france');
}

export default function ZuneraOtWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-with-discord-server-france" />;
}
