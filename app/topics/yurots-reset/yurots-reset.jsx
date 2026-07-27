import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-reset');
}

export default function YurotsResetKeywordPage() {
  return <StaticKeywordPage slug="yurots-reset" />;
}
