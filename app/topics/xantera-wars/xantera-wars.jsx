import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-wars');
}

export default function XanteraWarsKeywordPage() {
  return <StaticKeywordPage slug="xantera-wars" />;
}
