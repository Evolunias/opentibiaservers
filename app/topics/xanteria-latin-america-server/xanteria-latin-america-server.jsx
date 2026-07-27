import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-latin-america-server');
}

export default function XanteriaLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-latin-america-server" />;
}
