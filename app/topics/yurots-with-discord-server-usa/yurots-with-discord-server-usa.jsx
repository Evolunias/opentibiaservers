import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-discord-server-usa');
}

export default function YurotsWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-discord-server-usa" />;
}
