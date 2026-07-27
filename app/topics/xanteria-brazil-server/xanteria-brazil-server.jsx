import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-brazil-server');
}

export default function XanteriaBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-brazil-server" />;
}
