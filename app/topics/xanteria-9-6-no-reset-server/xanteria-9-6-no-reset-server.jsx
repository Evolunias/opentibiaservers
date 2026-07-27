import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-no-reset-server');
}

export default function Xanteria96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-no-reset-server" />;
}
