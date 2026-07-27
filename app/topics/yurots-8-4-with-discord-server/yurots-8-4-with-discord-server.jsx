import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-4-with-discord-server');
}

export default function Yurots84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-4-with-discord-server" />;
}
