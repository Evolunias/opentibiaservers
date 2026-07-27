import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-low-exp-server-sweden');
}

export default function XanteriaLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-low-exp-server-sweden" />;
}
