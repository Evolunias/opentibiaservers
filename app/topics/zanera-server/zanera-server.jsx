import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-server');
}

export default function ZaneraServerKeywordPage() {
  return <StaticKeywordPage slug="zanera-server" />;
}
