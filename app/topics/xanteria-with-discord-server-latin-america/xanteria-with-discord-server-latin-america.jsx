import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-discord-server-latin-america');
}

export default function XanteriaWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-discord-server-latin-america" />;
}
