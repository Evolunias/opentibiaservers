import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-status');
}

export default function YurotsStatusKeywordPage() {
  return <StaticKeywordPage slug="yurots-status" />;
}
