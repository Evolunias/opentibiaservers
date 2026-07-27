import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-south-america-server');
}

export default function XanteriaSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-south-america-server" />;
}
