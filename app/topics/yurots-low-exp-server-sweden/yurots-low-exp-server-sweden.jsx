import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-low-exp-server-sweden');
}

export default function YurotsLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-low-exp-server-sweden" />;
}
