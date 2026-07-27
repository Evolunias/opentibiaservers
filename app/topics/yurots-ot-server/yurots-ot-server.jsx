import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-ot-server');
}

export default function YurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-ot-server" />;
}
