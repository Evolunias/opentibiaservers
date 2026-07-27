import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-with-discord-server');
}

export default function Xanteria81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-with-discord-server" />;
}
