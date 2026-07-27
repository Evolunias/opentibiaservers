import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots');
}

export default function YurotsKeywordPage() {
  return <StaticKeywordPage slug="yurots" />;
}
