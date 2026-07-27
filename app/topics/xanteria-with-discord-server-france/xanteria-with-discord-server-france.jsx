import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-discord-server-france');
}

export default function XanteriaWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-discord-server-france" />;
}
