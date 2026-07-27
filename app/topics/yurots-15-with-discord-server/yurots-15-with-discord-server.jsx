import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-with-discord-server');
}

export default function Yurots15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-with-discord-server" />;
}
