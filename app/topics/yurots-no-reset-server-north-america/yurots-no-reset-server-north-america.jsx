import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-no-reset-server-north-america');
}

export default function YurotsNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-no-reset-server-north-america" />;
}
