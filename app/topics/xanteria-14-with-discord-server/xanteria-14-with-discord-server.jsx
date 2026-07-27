import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-with-discord-server');
}

export default function Xanteria14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-with-discord-server" />;
}
