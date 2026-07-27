import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-with-discord-server');
}

export default function Xanteria12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-with-discord-server" />;
}
