import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-south-america-servers');
}

export default function XanteriaSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-south-america-servers" />;
}
