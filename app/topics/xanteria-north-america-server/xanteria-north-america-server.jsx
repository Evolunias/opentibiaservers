import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-north-america-server');
}

export default function XanteriaNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-north-america-server" />;
}
