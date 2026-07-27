import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-6-with-discord-server');
}

export default function Xanteria86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-6-with-discord-server" />;
}
