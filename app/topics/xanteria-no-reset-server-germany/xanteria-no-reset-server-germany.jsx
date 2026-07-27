import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-no-reset-server-germany');
}

export default function XanteriaNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-no-reset-server-germany" />;
}
