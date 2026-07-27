import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-no-reset-server-canada');
}

export default function XanteriaNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-no-reset-server-canada" />;
}
