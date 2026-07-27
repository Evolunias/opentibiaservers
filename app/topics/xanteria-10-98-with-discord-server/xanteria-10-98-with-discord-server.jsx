import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-98-with-discord-server');
}

export default function Xanteria1098WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-98-with-discord-server" />;
}
