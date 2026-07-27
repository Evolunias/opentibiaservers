import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-baiak-server-france');
}

export default function XanteriaBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-baiak-server-france" />;
}
