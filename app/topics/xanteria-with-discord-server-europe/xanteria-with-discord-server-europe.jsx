import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-discord-server-europe');
}

export default function XanteriaWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-discord-server-europe" />;
}
