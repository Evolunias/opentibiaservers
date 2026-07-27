import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-high-exp-server-sweden');
}

export default function XanteriaHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-high-exp-server-sweden" />;
}
