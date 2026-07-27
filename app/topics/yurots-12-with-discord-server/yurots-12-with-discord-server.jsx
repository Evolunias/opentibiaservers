import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-with-discord-server');
}

export default function Yurots12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-with-discord-server" />;
}
