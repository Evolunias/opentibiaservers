import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-france-server');
}

export default function XanteriaFranceServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-france-server" />;
}
