import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-discord-server-poland');
}

export default function YurotsWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-discord-server-poland" />;
}
