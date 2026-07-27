import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-canada');
}

export default function YurotsRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-canada" />;
}
