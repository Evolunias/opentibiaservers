import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-server');
}

export default function XanteraServerKeywordPage() {
  return <StaticKeywordPage slug="xantera-server" />;
}
