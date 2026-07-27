import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-6-no-reset-server');
}

export default function Xanteria86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-6-no-reset-server" />;
}
