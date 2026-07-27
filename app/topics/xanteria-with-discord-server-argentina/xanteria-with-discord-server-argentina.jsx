import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-discord-server-argentina');
}

export default function XanteriaWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-discord-server-argentina" />;
}
