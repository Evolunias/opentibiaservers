import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-no-reset-server');
}

export default function Xanteria12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-no-reset-server" />;
}
