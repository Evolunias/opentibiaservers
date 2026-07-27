import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-discord-server-north-america');
}

export default function YurotsWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-discord-server-north-america" />;
}
