import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-no-reset-server-north-america');
}

export default function XanteriaNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-no-reset-server-north-america" />;
}
