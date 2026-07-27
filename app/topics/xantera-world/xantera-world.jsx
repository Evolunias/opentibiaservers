import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-world');
}

export default function XanteraWorldKeywordPage() {
  return <StaticKeywordPage slug="xantera-world" />;
}
