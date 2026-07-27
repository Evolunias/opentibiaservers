import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-europe');
}

export default function YurotsRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-europe" />;
}
