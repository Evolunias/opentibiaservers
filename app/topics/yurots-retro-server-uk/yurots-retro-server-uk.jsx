import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-uk');
}

export default function YurotsRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-uk" />;
}
