import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-with-discord-server');
}

export default function Xanteria13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-with-discord-server" />;
}
