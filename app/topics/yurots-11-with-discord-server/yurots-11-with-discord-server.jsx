import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-with-discord-server');
}

export default function Yurots11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-with-discord-server" />;
}
