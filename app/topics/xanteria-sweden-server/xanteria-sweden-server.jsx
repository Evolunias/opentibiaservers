import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-sweden-server');
}

export default function XanteriaSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-sweden-server" />;
}
