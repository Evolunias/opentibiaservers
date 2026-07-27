import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-wars');
}

export default function YurotsWarsKeywordPage() {
  return <StaticKeywordPage slug="yurots-wars" />;
}
