import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-with-discord-server');
}

export default function Xanteria11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-with-discord-server" />;
}
