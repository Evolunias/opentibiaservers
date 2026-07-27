import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-6-with-discord-server');
}

export default function Xanteria76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-6-with-discord-server" />;
}
