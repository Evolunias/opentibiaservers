import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-latin-america-servers');
}

export default function XanteriaLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-latin-america-servers" />;
}
