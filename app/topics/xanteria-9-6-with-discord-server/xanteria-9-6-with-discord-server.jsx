import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-with-discord-server');
}

export default function Xanteria96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-with-discord-server" />;
}
