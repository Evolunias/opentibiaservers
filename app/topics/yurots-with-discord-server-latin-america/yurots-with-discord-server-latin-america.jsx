import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-discord-server-latin-america');
}

export default function YurotsWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-discord-server-latin-america" />;
}
