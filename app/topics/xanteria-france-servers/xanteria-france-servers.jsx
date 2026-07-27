import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-france-servers');
}

export default function XanteriaFranceServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-france-servers" />;
}
