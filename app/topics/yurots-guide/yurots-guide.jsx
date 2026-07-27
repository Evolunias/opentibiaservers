import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-guide');
}

export default function YurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="yurots-guide" />;
}
