import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-discord-server-brazil');
}

export default function YurotsWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-discord-server-brazil" />;
}
