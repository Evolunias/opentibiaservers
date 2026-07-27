import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-guilds');
}

export default function ZuneraOtGuildsKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-guilds" />;
}
