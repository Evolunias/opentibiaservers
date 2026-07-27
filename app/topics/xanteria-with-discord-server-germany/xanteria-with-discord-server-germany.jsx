import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-discord-server-germany');
}

export default function XanteriaWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-discord-server-germany" />;
}
