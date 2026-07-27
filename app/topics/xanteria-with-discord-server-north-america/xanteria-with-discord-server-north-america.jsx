import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-discord-server-north-america');
}

export default function XanteriaWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-discord-server-north-america" />;
}
