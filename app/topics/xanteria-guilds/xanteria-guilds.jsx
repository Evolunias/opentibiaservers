import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-guilds');
}

export default function XanteriaGuildsKeywordPage() {
  return <StaticKeywordPage slug="xanteria-guilds" />;
}
