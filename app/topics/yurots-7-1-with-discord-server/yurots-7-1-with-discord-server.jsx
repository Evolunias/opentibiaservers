import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-1-with-discord-server');
}

export default function Yurots71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-1-with-discord-server" />;
}
