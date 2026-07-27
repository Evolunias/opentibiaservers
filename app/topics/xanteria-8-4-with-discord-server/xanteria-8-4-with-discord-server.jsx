import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-4-with-discord-server');
}

export default function Xanteria84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-4-with-discord-server" />;
}
