import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-no-reset-server-france');
}

export default function YurotsNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-no-reset-server-france" />;
}
