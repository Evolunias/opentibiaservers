import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-sweden-servers');
}

export default function XanteriaSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-sweden-servers" />;
}
