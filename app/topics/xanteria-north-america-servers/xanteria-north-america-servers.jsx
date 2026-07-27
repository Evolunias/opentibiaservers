import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-north-america-servers');
}

export default function XanteriaNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-north-america-servers" />;
}
