import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-guilds');
}

export default function ZaneraGuildsKeywordPage() {
  return <StaticKeywordPage slug="zanera-guilds" />;
}
