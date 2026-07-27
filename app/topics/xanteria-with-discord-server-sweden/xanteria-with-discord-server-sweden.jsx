import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-discord-server-sweden');
}

export default function XanteriaWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-discord-server-sweden" />;
}
