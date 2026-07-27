import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-9-6-with-discord-server');
}

export default function Yurots96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-9-6-with-discord-server" />;
}
