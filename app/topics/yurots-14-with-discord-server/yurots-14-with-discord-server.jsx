import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-with-discord-server');
}

export default function Yurots14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-with-discord-server" />;
}
