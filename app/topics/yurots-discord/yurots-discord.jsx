import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-discord');
}

export default function YurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="yurots-discord" />;
}
