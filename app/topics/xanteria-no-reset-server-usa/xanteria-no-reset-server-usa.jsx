import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-no-reset-server-usa');
}

export default function XanteriaNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-no-reset-server-usa" />;
}
