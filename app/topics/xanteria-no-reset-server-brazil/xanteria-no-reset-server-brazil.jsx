import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-no-reset-server-brazil');
}

export default function XanteriaNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-no-reset-server-brazil" />;
}
