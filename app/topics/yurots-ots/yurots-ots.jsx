import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-ots');
}

export default function YurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="yurots-ots" />;
}
