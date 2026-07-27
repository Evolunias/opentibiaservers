import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera');
}

export default function XanteraKeywordPage() {
  return <StaticKeywordPage slug="xantera" />;
}
