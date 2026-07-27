import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-0-with-discord-server');
}

export default function Xanteria100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-0-with-discord-server" />;
}
