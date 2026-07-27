import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-discord-server-germany');
}

export default function YurotsWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-discord-server-germany" />;
}
