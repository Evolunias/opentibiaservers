import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-discord-server-argentina');
}

export default function YurotsWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-discord-server-argentina" />;
}
