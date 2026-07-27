import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-login');
}

export default function YurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="yurots-login" />;
}
