import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-no-reset-server');
}

export default function Xanteria15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-no-reset-server" />;
}
