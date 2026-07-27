import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-guilds');
}

export default function YurotsGuildsKeywordPage() {
  return <StaticKeywordPage slug="yurots-guilds" />;
}
