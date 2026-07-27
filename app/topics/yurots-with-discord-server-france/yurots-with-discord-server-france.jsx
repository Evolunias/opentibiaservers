import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-discord-server-france');
}

export default function YurotsWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-discord-server-france" />;
}
