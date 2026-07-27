import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-no-reset-server-argentina');
}

export default function XanteriaNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-no-reset-server-argentina" />;
}
