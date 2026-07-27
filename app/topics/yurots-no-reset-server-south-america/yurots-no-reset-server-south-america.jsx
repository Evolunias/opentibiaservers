import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-no-reset-server-south-america');
}

export default function YurotsNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-no-reset-server-south-america" />;
}
