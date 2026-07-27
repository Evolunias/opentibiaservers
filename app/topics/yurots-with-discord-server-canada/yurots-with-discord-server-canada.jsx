import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-discord-server-canada');
}

export default function YurotsWithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-discord-server-canada" />;
}
