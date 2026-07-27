import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-high-exp-server-sweden');
}

export default function YurotsHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-high-exp-server-sweden" />;
}
