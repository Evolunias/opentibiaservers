import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-4-no-reset-server');
}

export default function Xanteria74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-4-no-reset-server" />;
}
