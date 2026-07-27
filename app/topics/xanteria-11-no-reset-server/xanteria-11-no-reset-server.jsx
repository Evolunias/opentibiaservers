import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-no-reset-server');
}

export default function Xanteria11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-no-reset-server" />;
}
