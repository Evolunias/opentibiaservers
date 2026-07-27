import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-no-reset-server-poland');
}

export default function XanteriaNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-no-reset-server-poland" />;
}
