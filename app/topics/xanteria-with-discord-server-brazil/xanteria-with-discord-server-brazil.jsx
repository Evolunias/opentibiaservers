import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-discord-server-brazil');
}

export default function XanteriaWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-discord-server-brazil" />;
}
