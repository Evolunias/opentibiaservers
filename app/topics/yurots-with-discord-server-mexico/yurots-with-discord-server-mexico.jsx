import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-discord-server-mexico');
}

export default function YurotsWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-discord-server-mexico" />;
}
