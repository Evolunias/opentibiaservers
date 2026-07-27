import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-guilds');
}

export default function XanteraGuildsKeywordPage() {
  return <StaticKeywordPage slug="xantera-guilds" />;
}
